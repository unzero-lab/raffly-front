import ImgRegistration from "../../assets/Raffly.svg";
import React, { useState } from "react";
import {
  Form,
  InputContainer,
  Input,
  Button,
  Img,
  Main,
  Paragraph,
} from "./style";
import { useNavigate } from "react-router";

const RegistrationScreen = () => {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/complemento-de-cadastro");
  }
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <Form>
        <InputContainer>
          <Input type="email" placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <Button onClick={handlenavigate} type="submit">
          Criar seu cadastro
        </Button>
      </Form>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
