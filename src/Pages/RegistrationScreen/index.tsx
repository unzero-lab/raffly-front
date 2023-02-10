import ImgRegistration from "../../assets/Raffly.svg";
import {
  Form,
  Button,
  InputContainer,
  Img,
  Main,
  Paragraph,
  InputBox,
} from "./style";
import InputComponent from "../../components/InputComponent";
import { InputIcon } from "../../components/InputIcon";
import { Envelope, Lock } from "phosphor-react";
import { ButtonRegistration } from "../../components/ButtonRegistration";
import { ButtonApresentaion } from "../../components/ButtonApresentaion";

const RegistrationScreen = () => {
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>
        <Form>
          <InputBox>
            <InputIcon icon={<Envelope size={26} />} />
            <InputComponent type="text" placeholder="Email" />
          </InputBox>

          <InputBox>
            <InputIcon icon={<Lock size={26} color="#A0AEC0" />} />
            <InputComponent type="password" placeholder="Password" />
          </InputBox>

          <ButtonRegistration path="/"></ButtonRegistration>
        </Form>
      </InputContainer>
      <Img />
    </Main>
  );
};

export default RegistrationScreen;
