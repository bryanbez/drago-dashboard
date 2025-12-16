import { getDragosService } from "./dragoService";
import { getDstPrice } from "./dstPriceService";
import { useWalletStore } from "../stores/storeWallet";
import { DragoInfo } from "@/app/types/drago";

export async function storeLocalAndSyncDragos(): Promise<DragoInfo[]> {
  const walletAddress = useWalletStore.getState().walletAddress;
  if (!walletAddress) {
    return [];
  }
  const { dragos } = (await getDragosService(walletAddress, true)) as {
    dragos: DragoInfo[];
  };

  localStorage.setItem("dragos", JSON.stringify(dragos));

  return dragos as DragoInfo[];
}

export async function storeLocalAndSyncDSTPrice(): Promise<number> {
  const dstPrice = (await getDstPrice()) as number;

  const localDstPrice = JSON.parse(localStorage.getItem("dstPrice") || "0");

  if (localDstPrice !== dstPrice) {
    localStorage.setItem("dstPrice", JSON.stringify(dstPrice));
  }
  return dstPrice;
}
