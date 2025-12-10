import { DST_TO_USD_RATE } from "@/app/lib/constants";
import { formatDST } from "@/app/lib/utils/renteeInfo";
import { StatsGridProps } from "@/app/types/components";

export const StatsGrid = ({ count, totalUnclaimedProfit }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
      <div className="bg-gray-50 p-4 rounded-xl">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Total Dragos
        </p>
        <p className="text-3xl font-bold text-gray-800">{count}</p>
      </div>
      <div className="bg-green-50 p-4 rounded-xl">
        <p className="text-green-600 text-sm uppercase tracking-wider mb-2">
          Unclaimed DST
        </p>
        <p className="text-3xl font-bold text-green-700">
          {formatDST(totalUnclaimedProfit)}
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-xl">
        <p className="text-green-600 text-sm uppercase tracking-wider mb-2">
          Unclaimed USD
        </p>
        <p className="text-3xl font-bold text-green-700">
          ${formatDST(totalUnclaimedProfit * DST_TO_USD_RATE)}
        </p>
      </div>
    </div>
  );
};
