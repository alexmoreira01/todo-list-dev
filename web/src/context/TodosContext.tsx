import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface TodoData {
  label: string;
}

export interface TodoDataUpdate extends TodoData {
  id: string
  status: "completed" | "pending";
}

export interface Todo {
  id: string;
  label: string;
  status: "completed" | "pending";
  created_at: string;
  updated_at: string;
}

interface TodoContextData {
  todos: Todo[];
  createNewTodo: (data: TodoData) => void;
  updateTodo: (data: TodoDataUpdate) => void;
  deleteTodo: (id: string) => void;
  notifyWarning: (message: string) => void;
}

export const TodoContext = createContext({} as TodoContextData);

const notifySuccess = (message: string) => toast.success(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

const notifyError = (message: string) => toast.error(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

const notifyWarning = (message: string) => toast.warn(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

interface TodoContextProviderProps {
  children: ReactNode;
}

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    api.get('/').then(
      response => {
        console.log(response.data)
        setTodos(response.data)
      }
    )
      .catch((error) => {
        notifyError("Não foi possível listar as tarefas, serviço indisponível!")
      })
  }

  async function createNewTodo(data: TodoData) {

    await api.post('/', {
      label: data.label,
    }).then(
      response => {
        notifySuccess("Tarefa cadastrado com sucesso!");

        setTodos((state) => [response.data, ...state]);
      }
    )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Todo já existente, altere o título!");
        }

        notifyError("Não foi possível criar o todo, serviço indisponível!");
      })
  }

  async function updateTodo(data: TodoDataUpdate) {

    await api.put(`/${data.id}`, {
      label: data.label,
      status: data.status,
    }).then(
      response => {
        notifySuccess("Todo editado com sucesso!")

        fetchTransactions();

        // setTodos((state) => [response.data, ...state]);
      }
    )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Todo  inexistente, altere o id!");
        } else if (error.response.status === 500) {
          return notifyWarning("Todo já existente, altere o título!");
        }

        notifyError("Não foi possível editar o todo, serviço indisponível!");
      })
  }

  async function deleteTodo(id: string) {
    await api.delete(`/${id}`)
      .then(
        response => {
          notifySuccess("Todo excluido com sucesso!");

          fetchTransactions();

          // const todosState = todos.filter((state) => state.id != id);
          // setTodos((state) => [todosState[0], ...state]);
        }
      )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Todo  inexistente, altere o id!");
        }

        notifyError("Não foi possível excluir o todo, serviço indisponível!");
      })
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        createNewTodo,
        updateTodo,
        deleteTodo,
        notifyWarning
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};