import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./style";

export function DefaulrLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
