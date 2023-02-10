import { IconBaseProps } from "react-icons";
import Icon from 'phosphor-react';

interface ButtonIconProps {
  icon: IconBaseProps | Icon.IconProps;
}

export function InputIcon(props: ButtonIconProps) {
  return(
    <div>
      <>
      { props.icon }
      </>
    </div>
    
  )
}