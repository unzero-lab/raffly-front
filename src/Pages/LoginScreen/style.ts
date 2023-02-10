import styled from "styled-components";


export const Main = styled.div`
      max-width: 800px;
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      justify-self: center;
      flex-direction: column;
      margin: 0 auto;
      width: 300px;
      height: 400px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  

`;

export const Input = styled.input`

  padding: 10px;
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