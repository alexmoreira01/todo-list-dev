import styled from "styled-components";

export const TodoContainer = styled.main`
  flex: 1;
  padding: 3rem 0rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

`;

export const TodoHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;

  p {
    font-weight: bold;
    font-size: 1rem;
  }

  p span {
    font-weight: bold;
    font-size: 1rem;

    color: ${(props) => props.theme["blue-300"]};
  }

  button {
    
  }
`;

export const TodoList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    margin-top: 1.3rem;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        /* width: 25%; */
        border-top-left-radius: 6px;
        padding-left: 1.5rem;
      }

      &:nth-last-child(3) {
        /* width: 55%; */
      }

      &:nth-last-child(2) {
        width: 20%;
      }

      &:last-child {
        width: 0%;
        border-top-right-radius: 6px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 0.9rem;
      font-size: 0.875rem;
      line-height: 1.6;

      a {
        color: ${(props) => props.theme["gray-100"]};
        text-decoration: none;
      }

      &:first-child {
        /* width: 20%; */
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;


        button {

          color: ${(props) => props.theme["gray-100"]};
          background-color: transparent;

          cursor: pointer;
          border: none;

          &:hover {
            color: ${(props) => props.theme["blue-300"]};;
          }

          box-shadow: 0 0 0 0;
        
        }
      }
    }
  }
`;

export const TodoListMobile = styled.div`
  margin-top: 12px;
  word-wrap: break-word;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25.6px;

    color: ${(props) => props.theme["gray-300"]};
  }

  li {
    height: auto !important;
    overflow: auto !important;

    list-style: none;

    width: 100%;
    height: 140px;
    margin-top: 10px;
    border-radius: 6px;
    padding: 20px;

    background-color: ${(props) => props.theme["gray-700"]};
  }
`;

export const ButtonsActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonTrashIcon = styled.button`
  &:hover {
    color: ${(props) => props.theme["red-500"]} !important;
  }
`;

interface StatusTodoProps {
  variant: "completed" | "pending";
}

export const StatusTodo = styled.span<StatusTodoProps>`
  @media screen and (max-width: 768px) {
    margin-top: 4px;

    font-size: 1.2rem;
    font-family: 700;
    line-height: 32px;
  }

  /* display: block; */
  color: ${(props) =>
    props.variant === "completed"
      ? props.theme["green-300"]
      : props.theme["red-500"]};
`;

export const DivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;

  span {
    color: ${(props) => props.theme["gray-500"]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 4px;
  }

  button {
    color: ${(props) => props.theme["gray-100"]};
    background-color: transparent;

    cursor: pointer;
    border: none;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};;
    }

    box-shadow: 0 0 0 0;
  }
`;



