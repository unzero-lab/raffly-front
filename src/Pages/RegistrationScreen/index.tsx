import ImgRegistration from "../../assets/Raffly.svg"
import { Form, Button, InputContainer, Img, Main, Paragraph, InputBox, Input } from './style';
import { InputIcon } from "../../components/InputIcon";
import { Envelope, Lock } from "phosphor-react";


const RegistrationScreen = () => {
  return (
    <Main>
      <Img src={ImgRegistration} alt="imagem de cadastro" />
      <Paragraph>Crie seu cadastro</Paragraph>
      <InputContainer>

      <Form>
        <InputBox>
        <InputIcon icon={<Envelope size={26}/>}/>
        <Input type="text" placeholder="Email" />
        </InputBox>

        <InputBox>
        <InputIcon icon={<Lock size={26} color="#A0AEC0"/>}/>
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
