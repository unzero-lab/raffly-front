import { CheckSquareOffset, ListBullets, Plus } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { FooterContainer } from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <NavLink to="#">
        <CheckSquareOffset size={32} />
      </NavLink>
      <button>
        <Plus size={28} weight="bold" />
      </button>
      <NavLink to="#">
        <ListBullets size={32} />
      </NavLink>
    </FooterContainer>
  );
}
