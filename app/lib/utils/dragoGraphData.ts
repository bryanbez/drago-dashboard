import type { DragoInfo } from "@/app/types/drago";

export function getCountOfDragosInEveryShareRatio(dragos: DragoInfo[]) {
  const shareRatioCount: { [key: string]: number } = {};

  dragos
    .filter((drago) => drago.rent.status !== 0) // currently rented
    .forEach((drago) => {
      const shareRatio = drago.rent.profitShareRatio;
      if (shareRatioCount[shareRatio]) {
        // change 0.1 to "10/90", 0.2 to 20/80, and so on
        shareRatioCount[shareRatio]++;
      } else {
        shareRatioCount[shareRatio] = 1;
      }
    });
  return shareRatioCount;
}
