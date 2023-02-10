import { Center } from "@chakra-ui/react";
import styled from 'styled-components';
//import { UserIcon, LockIcon } from 'phosphor-icons';
//import { SearchIcon as UnstyledSearchIcon } from '@phosphor/icons/icon/icon';

export const Main = styled.div`
  max-width: 800px;
  height: 100vh;
  width: 100%;
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



export const InputContainer = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  color: #A0AEC0;
`;


export const Form = styled.form`
  width: 100%;
  flex-direction: column;
`;

export const InputBox = styled.div` 
    background: white;
    padding: 5px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #E2E8F0;
    border-radius: 5px;
    
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