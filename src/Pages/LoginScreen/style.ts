import styled from "styled-components";

export const Main = styled.div`
      max-width: 500px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;
      flex-direction: column;
      margin: 0 auto;
      height: 100vh;
      padding: 0px 18px;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;


export const Img = styled.img`
  max-width: 150px;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme["gray-500"]};
`;


export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme["green-500"]};
  border: none;
  border-radius: 6px;
  padding: 10px;
  color: ${(props) => props.theme["white"]};;
  margin-top: 30px;
`;