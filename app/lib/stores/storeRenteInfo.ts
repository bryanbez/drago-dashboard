import type { RenteeInfoStats } from "@/app/types/rentee";

import { create } from "zustand";

interface RenteeInfoState {
  renteeInfo: RenteeInfoStats;
  setRenteeInfo: (renteeInfo: RenteeInfoStats) => void;
}

export const useRenteeInfoStore = create<RenteeInfoState>((set) => ({
  renteeInfo: {} as RenteeInfoStats,
  setRenteeInfo: (renteeInfo: RenteeInfoStats) => set({ renteeInfo }),
}));
