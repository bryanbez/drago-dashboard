import { ReactNode } from "react";

export interface CardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  isDollarSign?: boolean;
}
