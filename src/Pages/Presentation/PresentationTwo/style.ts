import { Center } from "@chakra-ui/react";
import styled from "styled-components";

export const Main = styled.main`
  max-width: 800px;
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
<<<<<<< HEAD
`;


=======
  margin: 0 auto;
  align-self: center;
  @media (min-width: 1000px) {
    max-width: 500px;
    width: 100%;
  }
`;
>>>>>>> d8e17f3d289e3259af7c0ce6c97b6dd37d76632a
export const Text = styled.div`
  margin-bottom: 3.75rem;
  padding: 0px;
`;


export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 1.875rem;
  color: ${(props) => props.theme["green-500"]};
<<<<<<< HEAD
=======
  @media (min-height: 750px) {
    font-size: 2.5rem;
  }
  @media (min-height: 920px) {
    font-size: 4rem;
  }
>>>>>>> d8e17f3d289e3259af7c0ce6c97b6dd37d76632a
`;

export const Paragraph = styled.p`
  margin-top: 1.2rem;
  margin-bottom: 5.25rem;
  text-align: Center;
  font-size: 0.875rem;
<<<<<<< HEAD
`;
=======
  margin-top: 0.875rem;
  margin-bottom: 20px;
  @media (min-height: 750px) {
    font-size: 1.25rem;
  }
  @media (min-height: 920px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1000px) {
    margin-bottom: 40px;
  }
`;
>>>>>>> d8e17f3d289e3259af7c0ce6c97b6dd37d76632a
