<<<<<<< HEAD
import ImgRegistration from "../../assets/Raffly.svg"
import React, { useState } from 'react';
import { Form, UserInput, PasswordInput, Button, Img, Main, Paragraph } from './style';

=======
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
>>>>>>> c0e05ba441faa184cd127e0669b85914935f5358

const RegistrationScreen = () => {
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <Form>
<<<<<<< HEAD
          <UserInput
            type="email"
            placeholder="E-mail"
          />
          <PasswordInput
            type="password"
            placeholder="Password"
          />
=======
        <InputContainer>
          <Input type="email" placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Password" />
        </InputContainer>
>>>>>>> c0e05ba441faa184cd127e0669b85914935f5358
        <Button type="submit">Criar seu cadastro</Button>
      </Form>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
