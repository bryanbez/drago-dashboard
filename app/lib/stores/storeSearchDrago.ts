import { create } from "zustand";

type SearchDragoState = {
  searchDrago: string;
  setSearchDrago: (searchDrago: string) => void;
};

export const useSearchDragoStore = create<SearchDragoState>((set) => ({
  searchDrago: "",
  setSearchDrago: (searchDrago: string) => set({ searchDrago }),
}));
