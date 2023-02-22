import ImgRegistration from "../../assets/Raffly.svg";
import {
  Form,
  Button,
  InputContainer,
  Img,
  Main,
  Paragraph,
  InputBox,
  Input,
} from "./style";
import { Envelope, Lock } from "phosphor-react";
import { useForm } from "react-hook-form";

export function RegistrationScreen () {
  const { register, handleSubmit } = useForm()

  function handleRegistration(data: any) {
    console.log(data);
  }

  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>
      <Form onSubmit={handleSubmit(handleRegistration)}>
          <InputBox>
            <Envelope size={26} color="#A0AEC0" />
            <Input 
              type="email" 
              placeholder="Email" 
              {...register("email")} />
          </InputBox>

          <InputBox>
            <Lock size={26} color="#A0AEC0" />
            <Input 
              type="password" 
              placeholder="Password" 
              {...register("password")}
            />
          </InputBox>

          <Button type="submit">Criar seu cadastro</Button>
        </Form>
      </InputContainer>
      <Img />
    </Main>
  );
};
