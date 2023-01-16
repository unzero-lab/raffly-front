import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  title: string;
  path: string;
}

export function ButtonApresentaion(props: ButtonProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(props.path);
  }
  return (
    <Button onClick={handleNavigate} colorScheme="green">
      {props.title}
    </Button>
  );
}
