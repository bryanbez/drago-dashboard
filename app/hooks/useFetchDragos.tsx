"use client";
import { useWalletAddressInputValue } from "../context/useTextBoxInput";
import { useDragosValue } from "../context/dragos";
import { getDragosService } from "../lib/service/dragoService";
import { DragoInfo } from "../types/drago";
import useSWR from "swr";

const fetcher = (walletAddress: string) =>
  getDragosService(walletAddress, true).then(
    (res) => (res as { dragos: DragoInfo[] }).dragos
  );

export const useFetchDragos = () => {
  const { walletAddress } = useWalletAddressInputValue();
  const { setDragos } = useDragosValue();

  const { data, error, isLoading, mutate } = useSWR(
    walletAddress ? walletAddress : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      onSuccess(data) {
        setDragos(data as DragoInfo[]);
      },
    }
  );

  return {
    fetchDragos: mutate,
    status: isLoading ? "loading" : error ? "error" : "success",
    message: error ? error.message : "Fetched from API",
    dragos: data as DragoInfo[],
  };
};
