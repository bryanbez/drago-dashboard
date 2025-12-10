"use client";

import { useFetchDragos } from "@/app/hooks/useFetchDragos";
import Loading from "@/components/partials/Loading";
import NoDragoFound from "@/components/partials/NoDragoFound";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useWalletAddressInputValue } from "@/app/context/useTextBoxInput";
import { usePathname } from "next/navigation";

export default function GlobalDataGuard({ children }: { children: ReactNode }) {
  const { status, dragos } = useFetchDragos();
  const { walletAddress } = useWalletAddressInputValue();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        {/* excludr settings page  in checking */}
        {pathname.includes("/settings") || pathname.includes("/rentees") ? (
          <main className="flex-1 p-6 overflow-y-auto relative">
            {children}
          </main>
        ) : (
          <main className="flex-1 p-6 overflow-y-auto relative">
            {walletAddress ? (
              <>
                {status === "loading" && <Loading />}
                {dragos?.length === 0 ? <NoDragoFound /> : children}
              </>
            ) : (
              <NoDragoFound />
            )}
          </main>
        )}
      </div>
    </div>
  );
}
