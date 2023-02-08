import styled from "styled-components";

////parei aqui
export const StyledInput = styled.input`
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
  &:focus {
    outline-style: none;
    box-shadow: none;
  }
`;