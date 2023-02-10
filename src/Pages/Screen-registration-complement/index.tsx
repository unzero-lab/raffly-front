import { Button, Header, Input, InputGroupState, Main, Title } from "./style";
import Avatar from "../../assets/Avatar.png";

export function ScreenRegistrationComplement() {
  return (
    <Main>
      <Title>Preencha seu perfil</Title>
      <Header>
        <img src={Avatar} alt="" />
        <p>Adicionar foto</p>
      </Header>

      <form action="">
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Nome" />

        <InputGroupState>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="UF" />
        </InputGroupState>

        <Input type="text" placeholder="Nome" />
        <Button>Confirmar</Button>
      </form>
    </Main>
  );
}
