import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
  padding-top: 50px;
  padding-bottom: 10px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;
