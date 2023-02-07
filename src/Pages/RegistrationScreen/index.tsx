
import ImgRegistration from "../../assets/Raffly.svg"
import React, { useState } from 'react';
import { Form, UserInput, PasswordInput, Button, Img, Main, Paragraph } from './style';

const RegistrationScreen = () => {
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <Form>
          <UserInput
            type="email"
            placeholder="E-mail"
          />
          <PasswordInput
            type="password"
            placeholder="Password"
          />
        <Button type="submit">Criar seu cadastro</Button>
      </Form>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
