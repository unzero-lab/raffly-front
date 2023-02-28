import ImgRegistration from "../../assets/Raffly.svg";
import * as z from "zod";
import {
  Form,
  Button,
  InputContainer,
  Img,
  Main,
  Paragraph,
  InputBox,
  Input,
  Error,
} from "./style";
import { Envelope, Lock } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newRegisterSchema = z.object({
  email: z.string().email({ message: "email inválido "}),
  password: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres"}),
});

type newRegisterFormInput = z.infer<typeof newRegisterSchema>;

export function RegistrationScreen () {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors },
   } = useForm<newRegisterFormInput>({
    resolver: zodResolver(newRegisterSchema),

    defaultValues: {
      email: "",
      password: "",
    },
   });

  function handleRegistration(data: any) {
    console.log(data);
    reset();
  }

  console.log(errors.email?.message);

  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>
      <Form onSubmit={handleSubmit(handleRegistration)}>
          <InputBox>
            <Envelope size={26} color="#A0AEC0" />
            <Input 
              placeholder="Email" 
              {...register("email")} />
          </InputBox>
          <Error>{errors.email?.message}</Error>

          <InputBox>
            <Lock size={26} color="#A0AEC0" />
            <Input 
              type="password" 
              placeholder="Password" 
              {...register("password")}
            />
          </InputBox>
          <Error>{errors.password?.message}</Error>

          <Button type="submit">Criar seu cadastro</Button>
        </Form>
      </InputContainer>
      <Img />
    </Main>
  );
};
