import { ReactNode } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  title: string | ReactNode;
  icon?: string;
  variant: string;
  full?: boolean;
  link?: string;
  action?: VoidFunction;
};
