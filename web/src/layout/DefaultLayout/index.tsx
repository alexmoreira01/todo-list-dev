import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { ContainerContent, LayoutContainer } from "./styles";

export function DefaultLayout() {
  
  return (
    <LayoutContainer>
      <ContainerContent>
        <Header />
        <Outlet />
      </ContainerContent>

    </LayoutContainer>
  );
}
