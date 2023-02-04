import ImgApresetationThree from "../../../assets/Winners-cuate 1.svg";
import { ButtonApresentaion } from "../../../components/ButtonApresentaion";
import { Img, Main, Paragraph, Text, Title } from "./style"

export function PresentationThree(){
  return(
    <Main>
      <img src={ImgApresetationThree} alt=""/>
      <Text>
       <Title>Faça Sorteios</Title>      
       <Paragraph>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
       </Paragraph>
       <ButtonApresentaion path="/apresentacao2" />   
      </Text> 
    </Main>    
  );   
}