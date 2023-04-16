import styled from "styled-components";

export const CreateFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  width: 100%;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-200"]};
    }
  }

  button {
    /* width: 100%; */
    border: 0;
    padding: 1rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.4rem;
    font-weight: bold;
    
    cursor: pointer;
    
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["gray-100"]};

    &:not(:disabled):hover {
      background: ${(props) => props.theme["blue-700"]};
    }
  }
`;

export const ButtonCreateTodo = styled.button`
  button {
    font-weight: bold;
    border: 1px solid ${(props) => props.theme["blue-300"]};
    border-radius: 6px;
    
    cursor: pointer;
    
    background-color: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["blue-300"]};

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border: 1px solid ${(props) => props.theme["blue-500"]};
      background-color: ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme.white};
      
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
