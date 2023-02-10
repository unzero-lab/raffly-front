import { useNavigate } from "react-router";
import { ButtonApresentaion } from "../../components/ButtonApresentaion";
import { Main, Form, InputContainer, Input, Button } from "./style";

export function LoginScreen() {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/cadastro");
  }
  return (
    <Main>
      <Form>
        <InputContainer>
          <Input type="email" placeholder="E-mail"></Input>
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Senha"></Input>
        </InputContainer>
        <Button onClick={handlenavigate} type="submit">
          Login
        </Button>
      </Form>
    </Main>
  );
}
