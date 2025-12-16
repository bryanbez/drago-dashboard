import { DragoInfo } from "../../types/drago";

// Dashboard Data

export const countDragosOwned = (dragos: DragoInfo[]): number => {
  return dragos.length;
};

export const countRentedDragos = (dragos: DragoInfo[]): number => {
  return dragos.filter((drago) => drago.rent?.status === 1).length;
};

export const countUnrentedDragos = (dragos: DragoInfo[]): number => {
  return dragos.filter((drago) => drago.rent?.status === 0).length;
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

// Activity Data

export const getDragosOnNearExpiryDate = (dragos: DragoInfo[]): DragoInfo[] => {
  const expiryDate = new Date().toISOString();
  const nearExpiryDate = new Date(expiryDate).setDate(
    new Date(expiryDate).getDate() + 29
  );
  const dragosOnNearExpiryDate = dragos
    .filter((drago) => drago.rent?.status === 1)
    .filter(
      (drago) =>
        drago.rent?.expireDate &&
        new Date(drago.rent.expireDate) < new Date(nearExpiryDate)
    )
    .sort(
      (a, b) =>
        (a.rent?.expireDate ? new Date(a.rent.expireDate).getTime() : 0) -
        (b.rent?.expireDate ? new Date(b.rent.expireDate).getTime() : 0)
    );

  return dragosOnNearExpiryDate;
};
