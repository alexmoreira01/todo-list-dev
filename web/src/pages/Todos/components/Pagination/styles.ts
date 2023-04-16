import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2px;

  .buttonActive {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const ButtonPagination = styled.button`
  display: inline-flex;
  height: 32px;
  min-width: 32px;
  
  margin: 0px 5px;
  padding: 0px 6px;
  border-radius: 16px;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  text-align: center;
  
  color: ${(props) => props.theme["gray-900"]};
  background-color: ${(props) => props.theme["gray-100"]};
  
  font-weight: 400;
  font-size: 0.875rem;
  
  cursor: pointer;
  
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

 
`;