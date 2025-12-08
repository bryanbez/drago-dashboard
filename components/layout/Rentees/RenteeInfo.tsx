"use client";

import type { RenteeInfoStats } from "@/app/types/rentee";
import DragoCard from "@/components/partials/Card/DragoCard";
import Link from "next/link";
import { RenteeIcon, ChevronLeftIcon } from "../../partials/svg";
import { formatDST } from "@/app/lib/utils/renteeInfo";
import { DST_TO_USD_RATE } from "@/app/lib/constants";

export const RenteeInfoComponent = (data: RenteeInfoStats) => {
  return (
    <div className="space-y-8">
      <div className="mb-4">
        <Link
          href="/rentees"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors group">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-2 shadow-sm group-hover:shadow-md transition-all">
            <ChevronLeftIcon />
          </div>
          <span className="font-medium">Back to Rentees</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-400 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <RenteeIcon />
            </div>
            <span className="font-mono text-blue-600 font-medium bg-blue-50 px-4 py-1.5 rounded-lg text-lg">
              {/* Since this is an info page, we don't need to format the address */}
              {data.walletAddress}
            </span>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
              Total Dragos
            </p>
            <p className="text-3xl font-bold text-gray-800">{data.count}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="text-green-600 text-sm uppercase tracking-wider mb-2">
              Unclaimed DST
            </p>
            <p className="text-3xl font-bold text-green-700">
              {formatDST(data.totalUnclaimedProfit)}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="text-green-600 text-sm uppercase tracking-wider mb-2">
              Unclaimed USD
            </p>
            <p className="text-3xl font-bold text-green-700">
              ${formatDST(data.totalUnclaimedProfit * DST_TO_USD_RATE)}
            </p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-4 border-t border-gray-100 pt-6">
          {/* Legendary Row */}
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-gray-700 font-medium">Legendary</span>
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
              <span className="text-gray-700 font-medium">Normal</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                x{data.totalOfNormalDragos}
              </span>
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {formatDST(data.totalProfitOfNormalDragos)} DST
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.dragos.map((drago) => (
          <DragoCard key={drago.tokenId} drago={drago} />
        ))}
      </div>
    </div>
  );
};
