import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  max-width: 800px;
  margin: 20px;
  text-align: center;
  padding: 20px 15px 20px 15px;
  font-family: "Rubik";

  background: #FAFAFC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const ContainerTopics = styled.div`
  display: flex;
  flex-direction: column;  

  svg{
    margin-right: 10px;
  }
`;

export const Topic = styled.div`
  display: flex;
  margin-top: 16px

`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 28px;

`;

export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme["green-500"]};
  border: none;
  border-radius: 6px;
  padding: 10px;
  color: ${(props) => props.theme["white"]};
  margin-top: 81px;
  font-size: 1.12rem;
`;
