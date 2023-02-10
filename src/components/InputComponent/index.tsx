import styled from "styled-components";
import { StyledInput } from "./style";

//import { Button } from "./style";


export default function InputComponent({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

