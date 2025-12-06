"use client";
import { useWalletAddressInputValue } from "@/app/context/useTextBoxInput";
import TextboxInput from "../partials/Textbox/Textbox";
import { getDragos } from "@/app/lib/apiCall";

function WalletAddressFormInput() {
  const { walletAddress } = useWalletAddressInputValue();
  const handleFormInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // for input validation later
    getDragos(walletAddress);
  };

  return (
    <form onSubmit={handleFormInput} className="flex items-center space-x-4">
      <TextboxInput type="text" placeholder="Input wallet address..." />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out">
        Submit
      </button>
    </form>
  );
}

export default WalletAddressFormInput;
