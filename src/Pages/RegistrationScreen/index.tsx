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
import { Envelope, Lock, User } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const newRegisterSchema = z.object({
  email: z.string().email({ message: "E-mail inválido " }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
  name: z.string(),
});

type newRegisterFormInput = z.infer<typeof newRegisterSchema>;

export function RegistrationScreen() {
  const navigate = useNavigate();
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
      name: "",
    },
  });

  async function handleRegisterUser(data: newRegisterFormInput) {
    const { email, password, name } = data;

    const response = await api.post(`provaider_user`, {
      email,
      password,
      name,
      gender: "",
      dateOfBirth: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      date: "",
      avatar: "",
    });

    if (response.status === 201) {
      navigate("/login");
    }

    reset();
  }

  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>
        <Form onSubmit={handleSubmit(handleRegisterUser)}>
          <InputBox>
            <User size={26} color="#A0AEC0" />
            <Input placeholder="Nome completo" {...register("name")} />
          </InputBox>

          <InputBox>
            <Envelope size={26} color="#A0AEC0" />
            <Input placeholder="E-mail" {...register("email")} />
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
}
