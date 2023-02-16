import ImgLogo from "../../assets/Raffly.svg";
import { useNavigate } from "react-router";
import { Main, Img, Paragraph, Form, InputContainer,ContainerLinkCheck, Link, ContainerCheck, Check, Label, Button,Footer, Span, LinkCad} from "./style";
import { InputIcon } from "../../components/InputIcon";
import * as Icon from "phosphor-react";
import InputComponent from "../../components/InputComponent";

export function LoginScreen() {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/cadastro");
  }
  return (
    <Main>
      <Img src={ImgLogo} alt="Logo Raffy"/>
      <Paragraph>Faça seu Login</Paragraph>
      <Form>
        <InputContainer>
          <InputIcon icon={<Icon.Envelope size={26} color="#A0AEC0" />} />
          <InputComponent type="email" placeholder="E-mail" />
        </InputContainer>

        <InputContainer>
          <InputIcon icon={<Icon.Lock size={26} color="#A0AEC0" />} />
          <InputComponent type="password" placeholder="Senha" />
        </InputContainer>

        <ContainerLinkCheck>
          <Link href="http://">Esqueceu a senha?</Link>
          <ContainerCheck>
            <Check type="checkbox"></Check>
            <Label>Lembre-me</Label>
          </ContainerCheck>
        </ContainerLinkCheck>
        
        <Button onClick={handlenavigate} type="submit">
          Login
        </Button>
      </Form>
      <Footer>
        <Span>Não tem cadastro? <LinkCad>Cadastre-se</LinkCad></Span>
      </Footer>
    </Main>
  );
}
