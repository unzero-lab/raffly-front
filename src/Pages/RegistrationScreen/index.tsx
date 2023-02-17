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

const RegistrationScreen = () => {
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>
        <Form>
          <InputBox>
            <Envelope size={26} color="#A0AEC0" />
            <Input type="text" placeholder="Email" />
          </InputBox>

          <InputBox>
            <Lock size={26} color="#A0AEC0" />
            <Input type="password" placeholder="Password" />
          </InputBox>

          <Button>Criar seu cadastro</Button>
        </Form>
      </InputContainer>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
