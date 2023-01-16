import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { colorsChakra } from "./styles/theme/default";

const theme = extendTheme({ colorsChakra });

export function App() {
  return (
    //cria o tema para toda a aplicação
    <ThemeProvider theme={defaultTheme}>
      {/**cria o tema para componentes do chakraUi */}
      <ChakraProvider theme={theme}>
        {/**configura o css principal da aplicação */}
        <GlobalStyle />
        {/**Gerencia as rotas da  aplicação*/}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  );
}
