import { ReactNode, CSSProperties } from "react";

export interface Props {
  children?: (valor: { name: string, mifun: Function }) => JSX.Element;
  className?: string;
  style?: CSSProperties;
};

export interface PropsAction {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};