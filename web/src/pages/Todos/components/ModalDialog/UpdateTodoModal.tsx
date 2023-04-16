import { useContext, useEffect } from "react";
import { Todo, TodoContext } from "../../../../context/TodosContext";
import { Controller, useForm } from "react-hook-form";

import * as Dialog from "@radix-ui/react-dialog";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { XSquare , CheckSquare, X } from "phosphor-react";

import {
  ButtonUpdate,
  CancelButton,
  CloseButton,
  Content,
  FooterButtons,
  Overlay,
  TodoStatus,
  TodoStatusButton,
} from "./styles";


const updateTodoFormSchema = zod.object({
  label: zod.string(),
  status: zod.enum(["completed", "pending"]),
});

interface UpdateTodoModalProps {
  todoSelected: Todo;
  onClose: () => void;
}

type UpdateTodoFormInputs = zod.infer<typeof updateTodoFormSchema>;

export function UpdateTodoModal({ todoSelected, onClose }: UpdateTodoModalProps) {
  const { updateTodo } = useContext(TodoContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue
  } = useForm<UpdateTodoFormInputs>({
    resolver: zodResolver(updateTodoFormSchema)
  });

  useEffect(() => {
    if (todoSelected) {
      setValue("label", todoSelected.label);
      setValue("status", todoSelected.status);
    }
  }, [setValue, todoSelected]);

  async function handleUpdateTodo(data: UpdateTodoFormInputs) {
    const { label, status } = data;

    await updateTodo({
      id: todoSelected.id,
      label,
      status,
    });

    reset();

    onClose();
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Atualizar a tarefa</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleUpdateTodo)}>
            <input
              type="text"
              placeholder="Título"
              required
              {...register("label")}
            />

            <Controller
              control={control}
              name="status"
              render={({ field }) => {
                return (
                  <TodoStatus
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TodoStatusButton variant="completed" value="completed">
                      <CheckSquare  size={24} />
                      Completa
                    </TodoStatusButton>

                    <TodoStatusButton variant="pending" value="pending">
                      <XSquare  size={24} />
                      Pendente
                    </TodoStatusButton>
                  </TodoStatus>
                );
              }}
            />

            <FooterButtons>
              <ButtonUpdate disabled={isSubmitting} type="submit">
                Atualizar
              </ButtonUpdate>

              <CancelButton>
                Cancelar
              </CancelButton>
            </FooterButtons>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
