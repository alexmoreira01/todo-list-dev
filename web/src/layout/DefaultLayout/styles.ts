import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  margin: 0;
  background-color: ${(props) => props.theme["gray-900"]}; 
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  height: fit-content;
  
  margin: 3rem auto;
  padding: 0rem 2.5rem 0rem 2.5rem;
  /* padding: 0px 2.5rem 0px 0px; */

  /* background: ${(props) => props.theme["gray-750"]}; */
  border-radius: 8px;

`;