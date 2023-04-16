import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodosContext';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';

import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import { CaretDown, NotePencil, Trash } from "phosphor-react";

import { CreateForm } from './components/CreateForm';
import { UpdateTodoModal } from './components/UpdateModalDialog/UpdateTodoModal';
import { ListTodosEmpty } from './components/ListTodosEmpty';
import { Pagination } from './components/Pagination';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ButtonsActions, ButtonTrashIcon, StatusTodo, TodoContainer, TodoDescription, TodoHeading, TodoList } from './styles';
import { SelectStatus } from './components/SelectStatus';
import { SelectIcon, SelectTrigger } from './components/SelectStatus/styles';

export function Todo() {
  const { todos, deleteTodo, notifyWarning, fetchTransactionsStatus } = useContext(TodoContext)

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

  
  function aa(event:any){
    fetchTransactionsStatus(event)
  }

  const [selectedValue, setSelectedValue] = useState('');

  // const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedValue(event.target.value);

  //   console.log(selectedValue)
  // };

  return (
    <TodoContainer>

      <ToastContainer />

      <TodoHeading>
        <CreateForm />
      </TodoHeading>

      <TodoDescription>
        <p>Tarefas: <span> {todos.length} </span></p>

        <Select.Root onValueChange={aa}>
          <SelectTrigger aria-label="Todo">
            <Select.Value placeholder="Seleciona o status"   />
            <SelectIcon>
              <CaretDown />
            </SelectIcon>
          </SelectTrigger>

          <SelectStatus/>
        </Select.Root>

      </TodoDescription>

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

                            <UpdateTodoModal
                              todoSelected={todoSelected}
                              onClose={handleCloseUpdateTodoModal}
                            />

                          </Dialog.Root>

                          <ButtonTrashIcon onClick={() => { handleDeleteTodo(todo.id) }}>
                              <Trash size={29} weight="fill" alt="Excluir todo" />
                            </ButtonTrashIcon>
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