import { DragoInfo } from "./drago";

export type RenteeInfo = {
  walletAddress: string;
  count: number;
  dragos: DragoInfo[];
};

export type RenteeInfoStats = RenteeInfo & {
  totalUnclaimedProfit: number;
  totalOfLegDragos: number;
  totalOfNormalDragos: number;
  totalProfitOfLegDragos: number;
  totalProfitOfNormalDragos: number;
};
