"use client";
import { storeLocalAndSyncDSTPrice } from "../lib/service/storeLocalAndSync";
import useSWR from "swr";

const fetcher = () => storeLocalAndSyncDSTPrice();

export const useFetchDSTPrice = () => {
  const { data, error, isLoading, mutate } = useSWR("dstPrice", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return {
    fetchDSTPrice: mutate,
    status: isLoading ? "loading" : error ? "error" : "success",
    message: error ? error.message : "Fetched from API",
    dstPrice: (data as number) || 0,
  };
};
