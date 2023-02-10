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
<<<<<<< HEAD

max-width: 365px;
width: 100%;

`
=======
  max-width: 600px;
  width: 100%;
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

`
export const Title = styled.h1`
<<<<<<< HEAD

font-size: 2rem;
text-align: center;
margin-top: 1.875rem;
color: ${(props) => props.theme["green-500"]};
=======
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
>>>>>>> d8e17f3d289e3259af7c0ce6c97b6dd37d76632a


`
export const Paragraph = styled.p`
<<<<<<< HEAD
text-align: center;
margin-bottom: 5.25rem;
font-size: 0.875em;
`
=======
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
>>>>>>> d8e17f3d289e3259af7c0ce6c97b6dd37d76632a
