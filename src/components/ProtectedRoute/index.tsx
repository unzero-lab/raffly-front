import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface PropsChildren {
  children?: ReactNode;
}

export function ProtectedRouter({ children }: PropsChildren) {
  const token = true;

  return <>{token ? children : <Navigate to="/login" />}</>;
}
