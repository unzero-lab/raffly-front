import { Bell } from "phosphor-react";
import Avatar from "../../assets/Avatar.png";
import { AvatarContainer, HeaderContainer, HeaderContent } from "./style";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <AvatarContainer>
          <img src={Avatar} alt="" />
          <div>
            <span>Bom dia!</span>
            <strong>Rafael Santos</strong>
          </div>
        </AvatarContainer>
        <Bell size={22} />
      </HeaderContent>
    </HeaderContainer>
  );
}
