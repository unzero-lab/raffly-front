import { Routes, Route, useLocation } from "react-router-dom";
import { PresentationOne } from "./Pages/Presentation/PresentationOne";
import { PresentationThree } from "./Pages/Presentation/PresentationThree";
import { PresentationTwo } from "./Pages/Presentation/PresentationTwo";
import { Welcomescreen } from "./Pages/Presentation/Welcomescreen";
import { RegistrationScreen } from "./Pages/RegistrationScreen";
import { LoginScreen } from "./Pages/LoginScreen";
import { ScreenRegistrationComplement } from "./Pages/Screen-registration-complement";
import { Home } from "./Pages/Home";
import { DefaulrLayout } from "./components/DefaultLayout";
import { ProtectedRouter } from "./components/ProtectedRoute";
import { useEffect } from "react";
import postMessage from "./utils/postmessage";
import { ScreenCreateRaffle } from "./Pages/Screen-create-raffle";

export function Router() {
  const location = useLocation();

  useEffect(() => {
    const data = {
      eventName: "routeChange",
      router: location,
      location: window.location,
    };
    postMessage(data);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Welcomescreen />} />
      <Route path="/apresentacao1" element={<PresentationOne />} />
      <Route path="/apresentacao2" element={<PresentationTwo />} />
      <Route path="/apresentacao3" element={<PresentationThree />} />
      <Route path="/cadastro" element={<RegistrationScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/**Rota home */}
      <Route
        path="/home"
        element={<ProtectedRouter children={<DefaulrLayout />} />}
      >
        <Route path="/home" element={<Home />} />
      </Route>

     {/**Rota tela para criar rifa*/}
      <Route
        path="/tutoria-rifa"
        element={<ProtectedRouter children={<DefaulrLayout />} />}
      >
        <Route path="/tutoria-rifa" element={<ScreenCreateRaffle />} />
      </Route>

      <Route
        path="/complemento-de-cadastro"
        element={<ScreenRegistrationComplement />}
      />
    </Routes>
  );
}
