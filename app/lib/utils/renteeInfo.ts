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

export function renteeInfoStats(renteesInfo: RenteeInfo[]) {
  const renteesInfoStats: RenteeInfoStats[] = [];
  renteesInfo.forEach((renteeInfo) => {
    const renteeInfoStat = renteesInfoStats.find(
      (info) => info.walletAddress === renteeInfo.walletAddress
    );
    if (renteeInfoStat) {
      renteeInfoStat.count = renteeInfo.count;
      renteeInfoStat.dragos = renteeInfo.dragos;
      renteeInfoStat.totalUnclaimedProfit = renteeInfo.dragos.reduce(
        (total, drago) => total + drago.rent?.stats?.unclaimedProfit,
        0
      );
      renteeInfoStat.totalOfLegDragos = renteeInfo.dragos.filter(
        (drago) => drago.filter?.parts?.legendary == 1
      ).length;
      renteeInfoStat.totalOfNormalDragos = renteeInfo.dragos.filter(
        (drago) => drago.filter?.parts?.legendary == 0
      ).length;
      renteeInfoStat.totalProfitOfLegDragos = renteeInfo.dragos
        .filter((drago) => drago.filter?.parts?.legendary == 1)
        .reduce((total, drago) => total + drago.rent.stats.unclaimedProfit, 0);
      renteeInfoStat.totalProfitOfNormalDragos = renteeInfo.dragos
        .filter((drago) => drago.filter?.parts?.legendary == 0)
        .reduce((total, drago) => total + drago.rent.stats.unclaimedProfit, 0);
    } else {
      renteesInfoStats.push({
        walletAddress: renteeInfo.walletAddress,
        count: renteeInfo.count,
        dragos: renteeInfo.dragos,
        totalUnclaimedProfit: renteeInfo.dragos.reduce(
          (total, drago) => total + drago.rent.stats.unclaimedProfit,
          0
        ),
        totalOfLegDragos: renteeInfo.dragos.filter(
          (drago) => drago.filter?.parts?.legendary == 1
        ).length,
        totalOfNormalDragos: renteeInfo.dragos.filter(
          (drago) => drago.filter?.parts?.legendary == 0
        ).length,
        totalProfitOfLegDragos: renteeInfo.dragos
          .filter((drago) => drago.filter?.parts?.legendary == 1)
          .reduce(
            (total, drago) => total + drago.rent.stats.unclaimedProfit,
            0
          ),
        totalProfitOfNormalDragos: renteeInfo.dragos
          .filter((drago) => drago.filter?.parts?.legendary == 0)
          .reduce(
            (total, drago) => total + drago.rent.stats.unclaimedProfit,
            0
          ),
      });
    }
  });
  return renteesInfoStats;
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
