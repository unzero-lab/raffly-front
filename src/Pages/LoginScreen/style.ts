import styled from "styled-components";

export const Main = styled.div`
      max-width: 800px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;
      flex-direction: column;
      margin: 0 auto;
      height: 100vh;
      padding: 0px 18px;
      font-family: 'Rubik';
`;

export const Paragraph = styled.p`
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 50px;
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
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  border: 1px solid #E2E8F0;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const ContainerLinkCheck = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Link = styled.a`
  color: ${(props) => props.theme["gray-900"]};
  font-size: 12px;
`;

export const ContainerCheck = styled.div`
  display: flex;
  justify-content: center;
`;

export const Check = styled.input`

    margin-right: 5px;
    &:checked {
     
    }
`;

export const Label = styled.label`
  font-size: 12px;
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


export const Footer = styled.div`
    margin-top: 130px;
    display: flex;
    justify-content: center;
`;

export const Span = styled.span`
    font-size: 16px;
`;

export const LinkCad = styled.a`
    color: ${(props) => props.theme["green-500"]};
`;