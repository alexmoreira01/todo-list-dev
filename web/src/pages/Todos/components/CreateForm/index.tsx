import { PlusCircle } from 'phosphor-react'

import { CreateFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from '../../../../services/api';
import { useContext } from 'react';
import { TodoContext } from '../../../../context/TodosContext';


const newTodoFormValidationSchema = zod.object({
  // label: zod.string().min(5, "Informe sua tarefa")
  label: zod.string()
})

type NewTodoFormValidationInput = zod.infer<typeof newTodoFormValidationSchema>;

export function CreateForm() {
  const isMobile = window.innerWidth <= 768;

  const{ createNewTodo } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    reset
  } = useForm<NewTodoFormValidationInput>({
    resolver: zodResolver(newTodoFormValidationSchema)
  })

  async function handleCreateTodo(data: NewTodoFormValidationInput){
    const { label } = data;

    await createNewTodo({
      label
    });

    reset();
  }

  return (
    <CreateFormContainer onSubmit={handleSubmit(handleCreateTodo)}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        required
        minLength={5}
        {...register('label')}
      />

      <button type='submit' title='Criar'>
        {isMobile ? "" : "Criar"}
        <PlusCircle size={20} />
      </button>
    </CreateFormContainer>
  )
}