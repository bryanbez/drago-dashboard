"use client";

import type { RenteeInfoStats } from "@/app/types/rentee";
import DragoCard from "@/components/partials/Card/DragoCard";
import Link from "next/link";
import { RenteeIcon, ChevronLeftIcon } from "../../partials/svg";
import { StatsGrid } from "@/components/partials/Stats/StatsGrid";
import { StatsBreakdown } from "@/components/partials/Stats/StatsBreakdown";

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
        <StatsGrid
          count={data.count}
          totalUnclaimedProfit={data.totalUnclaimedProfit}
        />

        {/* Breakdown */}
        <StatsBreakdown data={data} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.dragos.map((drago) => (
          <DragoCard key={drago.tokenId} drago={drago} />
        ))}
      </div>
    </div>
  );
};
