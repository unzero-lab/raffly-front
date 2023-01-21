import { Center } from "@chakra-ui/react";
import styled from "styled-components";

export const Main = styled.main`
  max-width: 800x;
  height: 100vg
  width: 100%
  margin: 0 auto;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 355px;
  width: 100%;
`;


export const Text = styled.div`
  margin-bottom: 3.75rem;
  padding: 0px;
`;


export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 1.875rem;
  color: ${(props) => props.theme["green-500"]};
`;

export const Paragraph = styled.p`
  margin-top: 1.2rem;
  margin-bottom: 5.25rem;
  text-align: Center;
  font-size: 0.875rem;
`;