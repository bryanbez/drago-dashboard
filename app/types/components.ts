import { ReactNode } from "react";

export interface CardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  isDollarSign?: boolean;
}

export interface TextboxType {
  placeholder: string;
  value?: string;
  type: string;
  onChangeText?: () => void;
  className?: string;
}

export interface DragoCardProps {
  drago: import("./drago").DragoInfo;
}
