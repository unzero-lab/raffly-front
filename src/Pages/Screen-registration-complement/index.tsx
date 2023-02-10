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
        <Input type="text" placeholder="Nome completo" />
        <Input type="date" placeholder="Data de nascimento" />

        <InputGroupState>
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </InputGroupState>

        <Input type="text" placeholder="Telefone" />
        <Button>Confirmar</Button>
      </form>
    </Main>
  );
}
