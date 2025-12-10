import { formatDST } from "@/app/lib/utils/renteeInfo";
import { StatsBreakdownProps } from "@/app/types/components";

export const StatsBreakdown = ({ data }: StatsBreakdownProps) => {
  return (
    <div className="space-y-4 border-t border-gray-100 pt-6">
      {/* Legendary Row */}
      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full bg-yellow-600"></span>

          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            x{data.totalOfLegDragos}
          </span>
        </div>
        <span className="text-lg font-semibold text-gray-800">
          {formatDST(data.totalProfitOfLegDragos)} DST
        </span>
      </div>

      {/* Normal Row */}
      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>

          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            x{data.totalOfNormalDragos}
          </span>
        </div>
        <span className="text-lg font-semibold text-gray-800">
          {formatDST(data.totalProfitOfNormalDragos)} DST
        </span>
      </div>
    </div>
  );
};
