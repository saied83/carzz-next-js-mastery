import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchMenuFactureProps {
  manuFacture: string;
  setManuFacture: (manufacture: string) => void;
}
