"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type WalletAddressInputContextType = {
  walletAddress: string;
  setWalletAddress: (v: string) => void;
};

const WalletAddressInputContext = createContext<
  WalletAddressInputContextType | undefined
>(undefined);

export const WalletAddressInputProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [walletAddress, setWalletAddressState] = useState<string>("");

  // Initialize from localStorage on mount
  useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("drago_wallet_address");
      if (stored) {
        setWalletAddressState(stored);
      }
    }
  });

  const setWalletAddress = (v: string) => {
    setWalletAddressState(v);
    if (typeof window !== "undefined") {
      localStorage.setItem("drago_wallet_address", v);
    }
  };

  return (
    <WalletAddressInputContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
      }}>
      {children}
    </WalletAddressInputContext.Provider>
  );
};

export const useWalletAddressInputValue = () => {
  const context = useContext(WalletAddressInputContext);
  if (!context)
    throw new Error(
      "useWalletAddressInputValue must be used within a useWalletAddressInputValue"
    );
  return context;
};
