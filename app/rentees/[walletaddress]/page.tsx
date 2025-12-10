"use client";
import { RenteeInfoComponent } from "@/components/layout/Rentees/RenteeInfo";
import { useRenteeInfoStore } from "@/app/lib/stores/storeRenteInfo";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function RenteeDetailPage() {
  const { renteeInfo } = useRenteeInfoStore();
  const params = useParams();

  if (renteeInfo.walletAddress !== params.walletaddress) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Invalid wallet address
        </h3>
        <Link
          href="/rentees"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4 inline-block">
          Go back to rentees page
        </Link>
      </div>
    );
  }

  return <RenteeInfoComponent {...renteeInfo} />;
}
