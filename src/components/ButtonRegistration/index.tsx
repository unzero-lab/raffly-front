import { useNavigate } from "react-router-dom";
import { Button } from "./style";


interface ButtonProps {
  path: string;
}

export function ButtonRegistration({ path }: ButtonProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(path);
  }

  return <Button onClick={handleNavigate}>Criar seu cadastro</Button>
}

