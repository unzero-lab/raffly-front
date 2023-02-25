import {
  Button,
  Header,
  Input,
  InputGroupState,
  Main,
  Title,
  Form,
  Select,
  MaskInput,
} from "./style";
import Avatar from "../../assets/Avatar.png";
import { useForm } from "react-hook-form";
import { api, apiCep } from "../../lib/axios";
import { useState } from "react";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

interface PropsProvaiderUser {
  name: string;
  gender: Gender | "";
  dateOfBirth?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string | "";
  date?: string;
}

export function ScreenRegistrationComplement() {
  const [typeInput, setTypeInput] = useState("text");
  const { register, handleSubmit, reset, resetField, watch, setValue } =
    useForm<PropsProvaiderUser>({
      mode: "onChange",
      defaultValues: {
        zipCode: "",
        gender: "",
        phone: "",
      },
    });
  let id = 2;

  async function handleUpadateProvaiderUser(data: PropsProvaiderUser) {
    const { name, gender, dateOfBirth, phone, city, country, state, zipCode } =
      data;

    const addrees = {
      city,
      country,
      state,
      zipCode,
    };

    const response = await api.put(`provaider_user/${id}`, {
      name,
      gender,
      addrees,
      dateOfBirth,
      phone,
    });

    if (response.statusText) {
      reset();
      resetField("zipCode");
    }
  }

  async function handleCep() {
    console.log(watch("zipCode"));
    const response = await apiCep.get(`${watch("zipCode")}/json/`);

    if (response.statusText) {
      setValue("zipCode", response.data.cep);
      setValue("city", response.data.localidade);
      setValue("state", response.data.uf);
    }
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

        <Select
          placeholder="Gernero"
          {...register("gender", { required: true })}
        >
          <option disabled selected hidden value="">
            Genero
          </option>
          <option value="FAMELE">Mulher</option>
          <option value="MALE">Homen</option>
          <option value="OTHER">Outro</option>
        </Select>

        <Input
          type={typeInput}
          placeholder="Data de nascimento"
          onFocus={(e) => {
            setTypeInput("date");
          }}
          {...register("dateOfBirth", { required: true })}
        />

        <Input type="text" placeholder="Pais" {...register("country")} />

        <Input
          type="text"
          placeholder="CEP"
          {...register("zipCode")}
          onBlur={handleCep}
        />

        <InputGroupState>
          <Input
            disabled
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />

          <Input disabled type="text" placeholder="UF" {...register("state")} />
        </InputGroupState>

        <MaskInput
          mask="(99) 99999-9999"
          type="text"
          placeholder="Telefone"
          {...register("phone")}
        />

        <Button>Confirmar</Button>
      </Form>
    </Main>
  );
}
