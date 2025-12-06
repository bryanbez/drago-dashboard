import WalletAddressFormInput from "@/components/sections/Form";
import { WalletAddressInputProvider } from "./context/useTextBoxInput";

export default function Home() {
  return (
    <WalletAddressInputProvider>
      <div className="w-full flex items-center justify-center bg-gray-300 overflow-auto">
        <WalletAddressFormInput />
      </div>
    </WalletAddressInputProvider>
  );
}
