import "styled-components";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'phosphor-icons' {
  export const UserIcon: string;
  export const LockIcon: string;
}
