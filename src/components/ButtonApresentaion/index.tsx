import { useNavigate } from "react-router-dom";
import { Button } from "./style";


interface ButtonProps {
  path: string;
}

export function ButtonApresentaion({ path }: ButtonProps) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(path);
  }

  return <Button onClick={handleNavigation}>Proximo</Button>;
  function handleNavigate() {
    navigate(path);
  }
}
