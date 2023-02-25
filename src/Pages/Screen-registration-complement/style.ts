import styled from "styled-components";
import InputMask from "react-input-mask";

export const Main = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 40px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  align-self: flex-start;
  font-weight: 600;
`;

export const Header = styled.div`
  margin-top: 40px;
  label {
    cursor: pointer;
  }
  p {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 30px;
    cursor: pointer;
  }

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    box-sizing: initial; /*ao adicinar bora em um elemento, faz ocupar um elemento a mais*/
  }
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  position: relative;
  top: -12px;
  left: 2px;
`;

export const Input = styled.input`
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  width: 100%;
  padding: 13px 16px;
  margin-top: 4px;
  margin-bottom: 16px;

  &[type="date"]::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }

  &[type="date"]::placeholder {
    color: red;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const MaskInput = styled(InputMask)`
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  width: 100%;
  padding: 13px 16px;
  margin-bottom: 16px;

  &[type="date"]::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }
`;

export const Select = styled.select`
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  width: 100%;
  padding: 13px 16px;
  margin-bottom: 16px;
  font-size: 1rem;

  option {
    font-size: 1rem;
    margin: 5px;
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const InputGroupState = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["green-500"]};

  margin-top: 14px;
  margin-bottom: 20px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme["green-200"]};
  }
`;
