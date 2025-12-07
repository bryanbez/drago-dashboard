"use client";

import { DragosProvider } from "./context/dragos";
import { WalletAddressInputProvider } from "./context/useTextBoxInput";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DragosProvider>
      <WalletAddressInputProvider>{children}</WalletAddressInputProvider>
    </DragosProvider>
  );
}
