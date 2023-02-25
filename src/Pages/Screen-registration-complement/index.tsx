import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Avatar from "../../assets/Avatar.png";
import { useForm } from "react-hook-form";
import { api, apiCep } from "../../lib/axios";

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
  Error,
  InputFile,
} from "./style";

const newRegisterComplementarySchema = z.object({
  name: z.string(),
  gender: z.enum(["MALE", "FAMELE", "OTHER", ""]),
  dateOfBirth: z.string(),
  phone: z.string().min(10, { message: "Telephone Invalido" }),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string().min(8, { message: "CEP precisa ter 8 números" }),
  date: z.date().optional(),
  avatar: z.string(),
});

type newRegisterComplementaryFormInput = z.infer<
  typeof newRegisterComplementarySchema
>;

export function ScreenRegistrationComplement() {
  const [typeInput, setTypeInput] = useState("text");
  const [errorCep, setErrorCep] = useState(false);
  const [imgAvatar, setImegeAvatar] = useState("");
  let id = 2;
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    setValue,
    formState: { errors },
  } = useForm<newRegisterComplementaryFormInput>({
    resolver: zodResolver(newRegisterComplementarySchema),

    mode: "onChange",
    defaultValues: {
      zipCode: "",
      gender: "",
      phone: "",
      country: "Brasil",
    },
  });

  async function handleUpadateProvaiderUser(
    data: newRegisterComplementaryFormInput
  ) {
    const {
      name,
      gender,
      dateOfBirth,
      phone,
      city,
      country,
      state,
      zipCode,
      avatar,
    } = data;

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
      avatar,
    });
    console.log(response);
    if (response.statusText) {
      reset();
      resetField("zipCode");
    }
  }

  function handleImg(event: any) {
    console.log(URL.createObjectURL(event.target.files[0]));
    setValue("avatar", URL.createObjectURL(event.target.files[0]));
    setImegeAvatar(URL.createObjectURL(event.target.files[0]));
  }

  async function handleCep(event: FormEvent) {
    event.preventDefault();
    console.log("cep");

    const response = await apiCep
      .get(`${watch("zipCode")}/json/`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log("tesste", error);
        setErrorCep(true);
      });

    if (response.erro === true) {
      console.log("erro");
      setErrorCep(true);
    } else if (response) {
      setValue("zipCode", response.cep);
      setValue("city", response.localidade);
      setValue("state", response.uf);
      setErrorCep(false);
    }
  }

  return (
    <Main>
      <Title>Preencha seu perfil</Title>
      <Header>
        {imgAvatar ? (
          <img src={imgAvatar} alt="" />
        ) : (
          <img src={Avatar} alt="" />
        )}

        <div>
          <p>
            {imgAvatar ? (
              <label htmlFor="file">Editar foto</label>
            ) : (
              <label htmlFor="file">Adicionar foto</label>
            )}
          </p>
          <InputFile
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImg}
          />
        </div>
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
          <option value="FAMELE">Feminino</option>
          <option value="MALE">Masculino</option>
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

        <Input
          disabled
          type="text"
          placeholder="Pais"
          {...register("country")}
        />

        <Input
          type="text"
          placeholder="CEP"
          {...register("zipCode")}
          onBlur={handleCep}
          onFocus={() => {
            setErrorCep(false);
          }}
        />

        <Error>{errorCep ? "Cep inexistente" : ""}</Error>
        <Error>{errors.zipCode?.message}</Error>

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
          mask="99 99999 9999"
          type="text"
          placeholder="Telefone"
          {...register("phone")}
        />

        <Button disabled={errorCep}>Confirmar</Button>
      </Form>
    </Main>
  );
}
