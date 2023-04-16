import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodosContext';

import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import { NotePencil, Trash } from "phosphor-react";

import { UpdateTodoModal } from './components/ModalDialog/UpdateTodoModal';
import { ListTodosEmpty } from './components/ListTodosEmpty';
import { Pagination } from './components/Pagination';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ButtonsActions, ButtonTrashIcon, StatusTodo, TodoContainer, TodoHeading, TodoList } from './styles';
import { CreateForm } from './components/CreateForm';

export function Todo() {
  const { todos, deleteTodo, notifyWarning } = useContext(TodoContext)

  const [todosPerPage, setTodosPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)

  const [todoSelected, setTodoSelected] = useState(Object);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  // Pagination
  const pages = Math.ceil(todos.length / todosPerPage);
  const startIndex = currentPage * todosPerPage;
  const endIndex = startIndex + todosPerPage;
  const currentTodos = todos.slice(startIndex, endIndex)

  function handleCloseUpdateTodoModal() {
    setOpenUpdateModal(false)
  }

  function handleDeleteTodo(id: string) {
    let deleteTodoMessage = confirm("Deseja realmente excluir esse todo ?");

    if (deleteTodoMessage) {
      deleteTodo(id);
      return
    }

    notifyWarning("Ação cancelada!")
  }

  function handleSetCurrentPage(index: number) {
    setCurrentPage(index)
  }

  return (
    <TodoContainer>

      <ToastContainer />

      <TodoHeading>
        <CreateForm/>

        {/* <h1>Total de todos: {todos.length}</h1> */}
      </TodoHeading>

      <TodoList >
        {
          todos.length != 0 ?
            <div>
              <table >
                <thead >
                  <tr>
                    <th>Tarefa</th>
                    <th>Status</th>
                    <th>Data</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody >
                  {currentTodos.map(todo => (
                    <tr key={todo.id}>
                      <td width="50%">{todo.label}</td>

                      <td>
                        <StatusTodo variant={todo.status}>
                          {todo.status === "completed" ? "Concluída" : "Pendente"}
                        </StatusTodo>
                      </td>

                      <td>
                        {formatDistanceToNowStrict(new Date(todo.created_at), {
                          addSuffix: true,
                          locale: ptBR
                        })}
                      </td>

                      <td>
                        <ButtonsActions>
                          <Dialog.Root open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
                            <Dialog.Trigger type="button"
                              onClick={() => { setTodoSelected(todo) }}
                            >
                              <NotePencil size={29} weight="fill" alt="Editar todo" />

                            </Dialog.Trigger>

                            <ButtonTrashIcon onClick={() => { handleDeleteTodo(todo.id) }}>
                              <Trash size={29} weight="fill" alt="Excluir todo" />
                            </ButtonTrashIcon>

                            <UpdateTodoModal
                              todoSelected={todoSelected}
                              // onCloseModal={handleCloseUpdateTodoModal}
                            />
                          </Dialog.Root>
                        </ButtonsActions>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

              <Pagination
                pages={pages}
                currentPage={currentPage}
                onSetCurrentPage={handleSetCurrentPage}
              />

            </div>

            :
            <ListTodosEmpty />
        }
      </TodoList>
    </TodoContainer>
  )
}