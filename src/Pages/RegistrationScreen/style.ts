import { Center } from "@chakra-ui/react";
import styled from 'styled-components';

export const Main = styled.div`
  max-width: 800x;
  height: 100vg
  width: 100%
  margin: 0 auto;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Img = styled.img`
  margin-top:6rem;
  max-width: 110px;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin-top: 4.2rem;
  margin-bottom: 0.1rem;
  text-align: Center;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: #1D1D1F;


`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 300px;
`;

export const InputContainer = styled.div`
  background: white;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #DCDCDC;
  width: 100%;
  margin-top: 20px;
  color: #A0AEC0;
  border-radius: 5px;
`;


export const Icon = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  width: 100%;
  &:focus {
    outline-style: none;
    box-shadow: none;
  }
  &::placeholder {
    color: #A0AEC0;
  }
  
`;


export const Button = styled.button`
  width: 100%;
  text-size: 18px;
  padding: 10px;
  background: ${(props) => props.theme["green-500"]};
  border: none;
  color: ${(props) => props.theme["backgorund"]};
  border-radius: 6px;
  margin-top: 30px;
`;


