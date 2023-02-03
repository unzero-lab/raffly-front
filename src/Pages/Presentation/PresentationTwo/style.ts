import styled from "styled-components";

export const Main = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: end;
  height: 100vh;
  padding: 0 18px;
`;

export const Img = styled.img`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  align-self: center;

  @media (min-width: 1000px) {
    max-width: 500px;
    width: 100%;
  }
`;
export const Text = styled.div`
  //margin-bottom: 3.75rem;
  padding: 0px;
  align-self: start;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 1.875rem;
  color: ${(props) => props.theme["green-500"]};

  @media (min-height: 750px) {
    font-size: 2.5rem;
  }
  @media (min-height: 920px) {
    font-size: 4rem;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 0.875rem;
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
