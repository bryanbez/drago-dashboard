import { getDragosService } from "./dragoService";
import { getDstPrice } from "./dstPriceService";
import { useWalletStore } from "../stores/storeWallet";
import { DragoInfo } from "@/app/types/drago";
import { countUnclaimedDST } from "../utils/dragoDashboard";

type DragoOutput = {
  dragos: DragoInfo[];
  dstPrice: number;
};

export async function storeLocalAndSync(): Promise<DragoOutput> {
  const walletAddress = useWalletStore.getState().walletAddress;
  if (!walletAddress) {
    return {
      dragos: [],
      dstPrice: 0,
    };
  }
  // dragos.dragos is the data thats why it has curly braces
  const { dragos } = (await getDragosService(walletAddress, true)) as {
    dragos: DragoInfo[];
  };
  const dstPrice = (await getDstPrice()) as number;

  //compare the data of dstPrice and Dragos into localstorage, if different, update the localstorage
  // because thats the latest data

  const localDragos = JSON.parse(localStorage.getItem("dragos") || "[]");
  const localDstPrice = JSON.parse(localStorage.getItem("dstPrice") || "0");

  if (
    localDragos.length > 0 &&
    countUnclaimedDST(dragos as DragoInfo[]) !== countUnclaimedDST(localDragos)
  ) {
    localStorage.setItem("dragos", JSON.stringify(dragos));
  }

  if (localDstPrice !== dstPrice) {
    localStorage.setItem("dstPrice", JSON.stringify(dstPrice));
  }

  return {
    dragos: dragos as DragoInfo[],
    dstPrice: dstPrice,
  };
}
