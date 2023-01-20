import { ButtonApresentaion } from "../../../components/ButtonApresentaion";
import { Main, Title, Text, Paragraph } from "./style";

export function PresentationOne() {
  return <Main>
            <img src="src\assets\Price-cuate 1.svg" alt="">

            </img>
            <Text>
              <Title>Crie Suas Rifas</Title>
              <Paragraph>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </Paragraph>
              < ButtonApresentaion path="/apresentacao2"/>
            </Text>
            
          </Main>;
}
