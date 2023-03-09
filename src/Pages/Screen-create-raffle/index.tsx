import React from "react";
import { Container, Title, Text, Button, Paragraph, Section, ContainerTopics, Topic } from "./style";
import { CheckCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function ScreenCreateRaffle() {
  const navigate = useNavigate();
  
 
    function handleClick() {
    navigate("/cadastrar-rifa");
  }

  return (

    <Section>
    <Container>
      <Paragraph>Você ainda não criou uma rifa</Paragraph>
  
      <Title>Crie uma rifa</Title>
      
      <ContainerTopics>
      
      <Topic>
      <CheckCircle size={26} color="#1D1D1F" />
      <Text>Crie sua primeira rifa</Text>
      </Topic>

      <Topic>
      <CheckCircle size={26} color="#1D1D1F" />
      <Text>Adicione imagem e descrição</Text>
      </Topic>

      <Topic>
      <CheckCircle size={26} color="#1D1D1F" />
      <Text>Divulgue em suas redes sociais</Text>
      </Topic>
      </ContainerTopics>
      
      <Button onClick={handleClick}>Criar Rifa</Button>
    </Container>
    </Section>
  );
}

export default ScreenCreateRaffle;
