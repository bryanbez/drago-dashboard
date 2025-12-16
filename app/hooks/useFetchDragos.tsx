"use client";
import { storeLocalAndSyncDragos } from "../lib/service/storeLocalAndSync";
import { DragoInfo } from "../types/drago";
import useSWR from "swr";

const fetcher = () => storeLocalAndSyncDragos();

export const useFetchDragos = () => {
  const { data, error, isLoading, mutate } = useSWR("dragos", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return {
    fetchDragos: mutate,
    status: isLoading ? "loading" : error ? "error" : "success",
    message: error ? error.message : "Fetched from API",
    dragos: (data as DragoInfo[]) || [],
  };
};
