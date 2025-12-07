import { useDragosValue } from "../context/dragos";
import {
  countDragosOwned,
  countUnclaimedDST,
  countTotalDSA,
  countUnrentedDragos,
  countRentedDragos,
} from "../lib/utils/dragoDashboard";
import { DragoInfo } from "../types/drago";

export const useDragosDashboardCard = () => {
  const { dragos } = useDragosValue();

  const countDragosOwnedValue = (): number => {
    return countDragosOwned(dragos as DragoInfo[]);
  };

  const countRentedDragosValue = (): number => {
    return countRentedDragos(dragos as DragoInfo[]);
  };

  const countUnclaimedDSTValue = (): number => {
    return countUnclaimedDST(dragos as DragoInfo[]);
  };

  const countTotalDSAValue = (): number => {
    return countTotalDSA(dragos as DragoInfo[]);
  };

  const countUnrentedDragosValue = (): number => {
    return countUnrentedDragos(dragos as DragoInfo[]);
  };

  return {
    dragos,
    countDragosOwnedValue,
    countUnclaimedDSTValue,
    countTotalDSAValue,
    countUnrentedDragosValue,
    countRentedDragosValue,
  };
};
