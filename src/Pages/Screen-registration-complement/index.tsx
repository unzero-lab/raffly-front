import {
  Button,
  Header,
  Input,
  InputGroupState,
  Main,
  Title,
  Form,
} from "./style";
import Avatar from "../../assets/Avatar.png";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

interface PropsProvaiderUser {
  name: string;
  gender: Gender;
  dateOfBirth?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  date?: string;
}

export function ScreenRegistrationComplement() {
  const { register, handleSubmit } = useForm<PropsProvaiderUser>();

  async function handleUpadateProvaiderUser(data: PropsProvaiderUser) {
    const { name, gender, dateOfBirth, phone, city, country, state, zipCode } =
      data;

    const addrees = {
      city,
      country,
      state,
      zipCode,
    };

    const response = await api.put("provaider_user/2", {
      name,
      gender,
      addrees,
      dateOfBirth,
      phone,
    });
    console.log(response);
  }

  return (
    <Main>
      <Title>Preencha seu perfil</Title>
      <Header>
        <img src={Avatar} alt="" />
        <p>Adicionar foto</p>
      </Header>

      <Form onSubmit={handleSubmit(handleUpadateProvaiderUser)}>
        <Input type="text" placeholder="Nome completo" {...register("name")} />

        <Input type="text" placeholder="Gernero" {...register("gender")} />

        <Input
          type="date"
          placeholder="Data de nascimento"
          {...register("date")}
        />

        <Input type="text" placeholder="CEP" {...register("zipCode")} />

        <Input type="text" placeholder="Pais" {...register("country")} />

        <InputGroupState>
          <Input type="text" placeholder="Cidade" {...register("city")} />

          <Input type="text" placeholder="UF" {...register("state")} />
        </InputGroupState>

        <Input type="text" placeholder="Telefone" {...register("phone")} />

        <Button>Confirmar</Button>
      </Form>
    </Main>
  );
}
