import ImgApresentationTwo from "../../../assets/Mobile note list-cuate 1.svg"
import { ButtonApresentaion } from "../../../components/ButtonApresentaion";
import { Img, Main, Paragraph, Text, Title } from "./style";

export function PresentationTwo() {
  return (
    <Main> 
      <Img src={ImgApresentationTwo} alt="imagem de apresentação tela 2" />
      <Text>
        <Title>
          Gerencie Números 
        </Title>
        <Paragraph>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        </Paragraph>
        <ButtonApresentaion title="Próximo" path="/apresentacao3" />
      </Text>
    </Main>
  )
}
