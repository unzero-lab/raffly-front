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

const RegistrationScreen = () => {
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
        <Button type="submit">Criar seu cadastro</Button>
      </Form>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
