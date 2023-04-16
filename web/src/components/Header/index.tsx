import todoLogo from "../../assets/task.svg";

import { HeaderContainer } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <div>
        <img src={todoLogo} alt="" />
        <h1>Todo List</h1>
      </div>

    </HeaderContainer>
  );
}