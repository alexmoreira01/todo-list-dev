import styled from "styled-components";


export const TodosListEmptyContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  align-content: center;

  padding: 40px 24px;
  margin-top: 5px;

  border-bottom-right-radius: 8px ;
  border-bottom-left-radius: 8px;
  
  border-right: 1px solid ${(props) => props.theme["gray-600"]};
  border-left: 1px solid ${(props) => props.theme["gray-600"]};

  p {
    display: grid;
    line-height: 140%;

    font-weight: bold;
    font-size: 16px;

    text-align: center;

    color: ${(props) => props.theme["gray-300"]};
  }

  p span {
    font-weight: 400;
    font-size: 16px;

    text-align: center;
    
    color: ${(props) => props.theme["gray-100"]};
  }
  `;

  export const TodosListEmptySvg = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 16px;

  color: ${(props) => props.theme["blue-300"]};
`;