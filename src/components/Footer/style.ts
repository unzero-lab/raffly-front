import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 12px;
  background: ${(props) => props.theme["white"]};

  a {
    display: flex;
    align-items: center;
    svg {
      color: ${(props) => props.theme["gray-900"]};
    }

    &.active {
      svg {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["green-500"]};
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    svg {
      color: ${(props) => props.theme["white"]};
    }
  }
`;
