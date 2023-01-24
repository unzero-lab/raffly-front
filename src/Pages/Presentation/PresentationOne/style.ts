import styled from "styled-components";


export const Main = styled.div`
max-width: 800px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
padding: 0 18px;
`

export const Img = styled.img`

max-width: 365px;
width: 100%;

`
export const Text = styled.div`
  margin-bottom: 3.75rem;
  padding: 0px;

`
export const Title = styled.h1`

font-size: 2rem;
text-align: center;
margin-top: 1.875rem;
color: ${(props) => props.theme["green-500"]};


`
export const Paragraph = styled.p`
text-align: center;
margin-bottom: 5.25rem;
font-size: 0.875em;
`
