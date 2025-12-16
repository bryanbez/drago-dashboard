import { ReactNode } from "react";
import type { RenteeInfoStats } from "./rentee";

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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface DragoCardProps {
  drago: import("./drago").DragoInfo;
}

export interface RenteeCardProps {
  data: RenteeInfoStats;
}

export interface StatsGridProps {
  count: number;
  totalUnclaimedProfit: number;
}

export interface StatsBreakdownProps {
  data: RenteeInfoStats;
}
