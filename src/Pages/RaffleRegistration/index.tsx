import { useState } from "react";
import Calendar from "react-calendar";
import {
  CarregarImg,
  CompositeValues,
  ContainerButton,
  ContainerCalendar,
  Form,
  Input,
  TextArear,
} from "./styled";
import { CloudArrowUp } from "phosphor-react";

export function RaffleRegistration() {
  const [value, onChange] = useState(new Date());

  return (
    <Form>
      <CarregarImg>
        <CloudArrowUp size={22} color="#242323" weight="light" />
        <span>Carregar imagem</span>
      </CarregarImg>

      <Input type="text" placeholder="title" />
      <TextArear name="" id="" placeholder="Descrição"></TextArear>

      <CompositeValues>
        <div>
          <label htmlFor="">Valor por número</label>
          <Input type="text" placeholder="R$ 0.00" />
        </div>

        <div>
          <label htmlFor="">Valor do produto</label>
          <Input type="text" placeholder="R$ 0.00" />
        </div>
      </CompositeValues>
      <ContainerCalendar>
        <Calendar onChange={onChange} value={value} />
      </ContainerCalendar>
      <ContainerButton>
        <button>Voltar</button>
        <button>Cadastrar</button>
      </ContainerButton>
    </Form>
  );
}
