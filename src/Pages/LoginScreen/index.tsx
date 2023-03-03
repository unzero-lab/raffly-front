import ImgLogo from "../../assets/Raffly.svg";
import { useNavigate } from "react-router";
import * as z from "zod";
import {
  Main,
  Img,
  Paragraph,
  Form,
  InputContainer,
  ContainerLinkCheck,
  Link,
  ContainerCheck,
  Check,
  Label,
  Button,
  Footer,
  Span,
  LinkCad,
  Input,
} from "./style";
import { Envelope, Lock } from "phosphor-react";
import { useForm } from "react-hook-form";

export function LoginScreen() {
  const navigate = useNavigate();

  function handleLogin(data: any) {
    console.log("senhs", data);
    navigate("/home");
  }

  return (
    <Main>
      <Img src={ImgLogo} alt="Logo Raffy" />
      <Paragraph>Faça seu Login</Paragraph>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <InputContainer>
          <Envelope size={26} color="#A0AEC0" />
          <Input placeholder="E-mail" required {...register("email")} />
        </InputContainer>
        <Error>{errors.email?.message}</Error>

        <InputContainer>
          <Lock size={26} color="#A0AEC0" />
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
        </InputContainer>

        <ContainerLinkCheck>
          <Link href="http://">Esqueceu a senha?</Link>
          <ContainerCheck>
            <Check type="checkbox"></Check>
            <Label>Lembre-me</Label>
          </ContainerCheck>
        </ContainerLinkCheck>

        <Button type="submit">Login</Button>
      </Form>
      <Footer>
        <Span>
          Não tem cadastro? <LinkCad href="/cadastro">Cadastre-se</LinkCad>
        </Span>
      </Footer>
    </Main>
  );
}
