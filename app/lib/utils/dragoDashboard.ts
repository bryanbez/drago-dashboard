import { DragoInfo } from "../types/DragoInfoType";

export const countDragosOwned = (dragos: DragoInfo[]): number => {
  return dragos.length;
};

export const countRentedDragos = (dragos: DragoInfo[]): number => {
  return dragos.filter((drago) => drago.rent.status === 1).length;
};

export const countUnrentedDragos = (dragos: DragoInfo[]): number => {
  return dragos.filter((drago) => drago.rent.status === 0).length;
};

export const countUnclaimedDST = (dragos: DragoInfo[]): number => {
  return dragos.reduce(
    (total, drago) => total + (Number(drago.rent?.stats?.unclaimedProfit) || 0),
    0
  );
};
export const countTotalDSA = (dragos: DragoInfo[]): number => {
  return dragos.reduce(
    (total, drago) => total + (Number(drago.rent?.stats?.totalProfit) || 0),
    0
  );
};
