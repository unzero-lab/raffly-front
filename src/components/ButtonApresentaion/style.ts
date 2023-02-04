import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme["green-500"]};
  border: none;
  color: ${(props) => props.theme["backgorund"]};
  border-radius: 6px;
`;
