import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid red;
  border-radius: 15px;
  padding: 15px;
  font-family: "Rubik";
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
