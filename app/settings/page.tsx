"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import WalletAddressFormInput from "@/components/sections/Form";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
              Settings
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Wallet Configuration
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Enter the wallet address you wish to track. This will be saved
                locally on your device.
              </p>

              <div className="max-w-md">
                <WalletAddressFormInput />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
