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
  const [walletAddress, setWalletAddress] = useState<string>("");

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
