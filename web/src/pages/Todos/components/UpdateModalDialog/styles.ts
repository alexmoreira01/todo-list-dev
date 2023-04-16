import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed; 
  width: 100vw;
  height: 100vh;
  z-index: 99999;

  /* top: 0 / botto: 0 / left: 0 / right:0 */
  inset: 0;
  background: rgb(0 0 0 / 23%);
`;

export const Content = styled(Dialog.Content)`
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 24px;

    position: absolute;
    bottom: 40%;
  }

  background: ${(props) => props.theme["gray-800"]};

  @media screen and (min-width: 768px) {
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;

    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CancelButton = styled(Dialog.Close)`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};

  margin-top: 1.5rem;
  gap: 0.4rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme["gray-500"]};

  &:hover {
    background: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute; 

  border: 0;
  line-height: 0; 

  top: 1.5rem;
  right: 1.5rem;

  color: ${(props) => props.theme["gray-500"]};

  cursor: pointer;

  background: transparent;
`;

export const ButtonUpdate = styled.button`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  border-radius: 6px;

  margin-top: 1.5rem;
  font-weight: bold;
  
  cursor: pointer;
  
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;

export const TodoStatus = styled(RadioGroup.Root)`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
`;

interface TransactionTypeButtonProps {
  variant: "completed" | "pending";
}

export const TodoStatusButton = styled(
  RadioGroup.Item
) <TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  padding: 1rem;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
    props.variant === "completed"
      ? props.theme["green-300"]
      : props.theme["red-500"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
    props.variant === "completed"
      ? props.theme["green-500"]
      : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;