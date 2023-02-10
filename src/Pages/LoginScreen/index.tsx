import { ButtonApresentaion } from "../../components/ButtonApresentaion";
import { Main, Form, InputContainer, Input, Button } from "./style";

export function LoginScreen() {
  return (
    <Main>
      <Form>
        <InputContainer>
          <Input type="email" placeholder="E-mail"></Input>
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Senha"></Input>
        </InputContainer>
        <Button type="submit">Login</Button>  
      </Form>
    </Main>
  );
}