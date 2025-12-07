"use client";
import { useWalletAddressInputValue } from "@/app/context/useTextBoxInput";
import TextboxInput from "../partials/Textbox/Textbox";
import { useFetchDragos } from "@/app/hooks/useFetchDragos";

function WalletAddressFormInput() {
  const { walletAddress } = useWalletAddressInputValue();
  const { fetchDragos, status, message } = useFetchDragos();

  const handleFormInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDragos();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <form
        onSubmit={handleFormInput}
        className="flex items-center space-x-4 w-full">
        <TextboxInput
          type="text"
          placeholder="Input wallet address..."
          value={walletAddress}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={`px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
          }`}>
          {status === "loading" ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {status === "error" && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-full"
          role="alert">
          <span className="font-medium">Error:</span> {message}
        </div>
      )}
    </div>
  );
}

export default WalletAddressFormInput;
