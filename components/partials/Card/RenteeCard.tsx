import { RenteeCardProps } from "@/app/types/components";
import { RenteeIcon } from "../svg";
import { useRenteeInfoStore } from "@/app/lib/stores/storeRenteInfo";
import { formatAddress, formatDST } from "@/app/lib/utils/renteeInfo";
import Link from "next/link";
import { StatsBreakdown } from "@/components/partials/Stats/StatsBreakdown";

export const RenteeCard = ({ data }: RenteeCardProps) => {
  const setRenteeInfo = useRenteeInfoStore((s) => s.setRenteeInfo);

  return (
    <div className="bg-white rounded-xl border border-gray-400 shadow-sm p-5 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <RenteeIcon />
          </div>
          <span className="font-mono text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-lg text-sm">
            {formatAddress(data.walletAddress)}
          </span>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            Total Dragos
          </p>
          <p className="text-2xl font-bold text-gray-800">{data.count}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-green-600 text-xs uppercase tracking-wider mb-1">
            Unclaimed DST
          </p>
          <p className="text-lg font-bold text-green-700">
            {formatDST(data.totalUnclaimedProfit)}
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <StatsBreakdown data={data} />

      <div className="flex items-center justify-between mt-4">
        <Link
          href={`/rentees/${data.walletAddress}`}
          onClick={() => setRenteeInfo(data)}
          className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full">
          View More
        </Link>
      </div>
    </div>
  );
};
