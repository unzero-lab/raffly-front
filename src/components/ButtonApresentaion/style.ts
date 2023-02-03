import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme["green-500"]};
  border: none;
  color: ${(props) => props.theme["backgorund"]};
  border-radius: 6px;
  margin-bottom: 3.75rem;
  cursor: pointer;
  @media (min-height: 750px) {
    font-size: 1.25rem;
  }

  @media (min-height: 920px) {
    font-size: 1.5rem;
  }
`;
