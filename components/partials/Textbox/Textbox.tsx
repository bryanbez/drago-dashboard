import { useWalletAddressInputValue } from "@/app/context/useTextBoxInput";
import type { TextboxType } from "./TextboxType";

function TextboxInput({ placeholder, value, type }: TextboxType) {
  const { setWalletAddress } = useWalletAddressInputValue();

  return (
    <>
      <input
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
    </>
  );
}

export default TextboxInput;
