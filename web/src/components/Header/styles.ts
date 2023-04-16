import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 1rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    div {
      gap: 0.5rem;
    }

    h1 {
      font-size: 1.3rem;
    }
  }
  
`;