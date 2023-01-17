import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    //cria o tema para toda a aplicação
    <ThemeProvider theme={defaultTheme}>
      {/**configura o css principal da aplicação */}
      <GlobalStyle />
      {/**Gerencia as rotas da  aplicação*/}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
