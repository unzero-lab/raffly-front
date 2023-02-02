import { Routes, Route } from "react-router-dom";
import { PresentationOne } from "./Pages/Presentation/PresentationOne";
import { PresentationThree } from "./Pages/Presentation/PresentationThree";
import { PresentationTwo } from "./Pages/Presentation/PresentationTwo";
import { Welcomescreen } from "./Pages/Presentation/Welcomescreen";
import RegistrationScreen from "./Pages/RegistrationScreen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcomescreen />} />
      <Route path="/apresentacao1" element={<PresentationOne />} />
      <Route path="/apresentacao2" element={<PresentationTwo />} />
      <Route path="/apresentacao3" element={<PresentationThree />} />
      <Route path="/cadastro" element={<RegistrationScreen />} />
    </Routes>
  );
}
