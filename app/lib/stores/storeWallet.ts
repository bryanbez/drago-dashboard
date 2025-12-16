import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface WalletState {
  walletAddress: string;
  setWalletAddress: (v: string) => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      walletAddress: "",
      setWalletAddress: (v) => set({ walletAddress: v }),
    }),
    {
      name: "drago_wallet_address", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
