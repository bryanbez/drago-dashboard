"use client";
import { useWalletAddressInputValue } from "../context/useTextBoxInput";

import { useDragosValue } from "../context/dragos";
import { getDragos } from "../lib/apiCall";
import { DragoInfo } from "../lib/types/DragoInfoType";
import useSWR from "swr";

const fetcher = (walletAddress: string) =>
  getDragos(walletAddress).then((res) => res.dragos);

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
    message: error ? error.message : "",
    dragos: data as DragoInfo[],
  };
};
