"use client";
import WalletAddressFormInput from "@/components/sections/Form";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
        Settings
      </h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Wallet Configuration
        </h3>
        <p className="text-gray-500 mb-6 text-sm">
          Enter the wallet address you wish to track. This will be saved locally
          on your device.
        </p>

        <div className="max-w-md">
          <WalletAddressFormInput />
        </div>
      </div>
    </div>
  );
}
