import styled from "styled-components";


export const Main = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
padding: 1.25rem;

`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  padding: 0 0.3125rem;

`
export const Title = styled.h1`

color: ${(props) => props.theme["green-500"]};


`
export const Paragraph = styled.p`

text-align: center;
margin-bottom: 3.925rem;
font-size: 0.875em;

`
