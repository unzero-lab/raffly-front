import ImgLogo from "../../assets/Raffly.svg";
import { useNavigate } from "react-router";
import { Main, Img, Form, InputContainer, Input, Button } from "./style";

export function LoginScreen() {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/cadastro");
  }
  return (
    <Main>
      <Img src={ImgLogo} alt="Logo Raffy"/>
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
