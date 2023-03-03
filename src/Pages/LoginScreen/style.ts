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
  font-family: "Rubik";
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
  flex-direction: column;
`;

export const Img = styled.img`
  max-width: 150px;
  margin-top: 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 14px 16px;
  margin: 12px 0 5px 0;
`;

export const InputBox = styled.div`
  display: flex;
  background: white;

  padding: 14px 16px;
  margin-bottom: 16px;

  padding-left: 16px;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;

  svg {
    display: flex;
    align-items: center;
  }

  svg {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding-left: 10px;

  border-radius: 5px;
  border: none;
  width: 100%;
  &:focus {
    outline-style: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
  }
`;

export const ContainerLinkCheck = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
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
  color: ${(props) => props.theme["white"]};
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

export const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-left: 3px;
`;
