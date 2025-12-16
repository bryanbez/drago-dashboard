import { DragoInfo } from "../../types/drago";
import type { RenteeInfo, RenteeInfoStats } from "../../types/rentee";

export function renteeDragosRentedInfo(dragos: DragoInfo[]) {
  const renteesInfo: RenteeInfo[] = [];
  dragos.forEach((drago) => {
    if (drago.rent.status !== 1) return;

    const renteeInfo = renteesInfo.find(
      (info) => info.walletAddress === drago.rent.to
    );

    if (renteeInfo) {
      renteeInfo.count++;
      renteeInfo.dragos.push(drago);
    } else {
      renteesInfo.push({
        walletAddress: drago.rent.to,
        count: 1,
        dragos: [drago],
      });
    }
  });
  return renteesInfo;
}

export function renteeInfoStats(renteesInfo: RenteeInfo[]): RenteeInfoStats[] {
  const renteeStatsMap = new Map<string, RenteeInfoStats>();

  for (const rentee of renteesInfo) {
    let renteeStats = renteeStatsMap.get(rentee.walletAddress);

    if (!renteeStats) {
      renteeStats = {
        walletAddress: rentee.walletAddress,
        count: 0,
        dragos: [],
        totalUnclaimedProfit: 0,
        totalOfLegDragos: 0,
        totalOfNormalDragos: 0,
        totalProfitOfLegDragos: 0,
        totalProfitOfNormalDragos: 0,
      };
      renteeStatsMap.set(rentee.walletAddress, renteeStats);
    }

    renteeStats.count = rentee.count;
    renteeStats.dragos = rentee.dragos;

    let totalUnclaimedProfit = 0;
    let totalOfLegDragos = 0;
    let totalOfNormalDragos = 0;
    let totalProfitOfLegDragos = 0;
    let totalProfitOfNormalDragos = 0;

    rentee.dragos.forEach((drago) => {
      const profit = drago.rent?.stats?.unclaimedProfit ?? 0;
      const legendary = drago.filter?.parts?.legendary ?? 0;

      totalUnclaimedProfit += profit;
      if (legendary >= 1) {
        totalOfLegDragos++;
        totalProfitOfLegDragos += profit;
      } else {
        totalOfNormalDragos++;
        totalProfitOfNormalDragos += profit;
      }
    });

    renteeStats.totalUnclaimedProfit = totalUnclaimedProfit;
    renteeStats.totalOfLegDragos = totalOfLegDragos;
    renteeStats.totalOfNormalDragos = totalOfNormalDragos;
    renteeStats.totalProfitOfLegDragos = totalProfitOfLegDragos;
    renteeStats.totalProfitOfNormalDragos = totalProfitOfNormalDragos;
  }

  return Array.from(renteeStatsMap.values());
}

export const getRenteeInfo = (walletAddress: string, dragos: DragoInfo[]) => {
  const renteesInfo = renteeDragosRentedInfo(dragos);
  const dragosRentedOfSpecificWalletAddress = renteesInfo.find(
    (info) => info.walletAddress === walletAddress
  );
  return dragosRentedOfSpecificWalletAddress;
};

export const formatAddress = (addr: string) => {
  if (!addr) return "";
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

export const formatDST = (val: number) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};
