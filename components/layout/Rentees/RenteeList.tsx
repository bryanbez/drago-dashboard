"use client";

import { useDragosValue } from "@/app/context/dragos";
import type { RenteeInfoStats } from "@/app/types/rentee";
import { RenteeCard } from "@/components/partials/Card/RenteeCard";
import { DragoInfo } from "@/app/types/drago";
import { renteeDragosRentedInfo } from "@/app/lib/utils/renteeInfo";
import { renteeInfoStats } from "@/app/lib/utils/renteeInfo";

export const RenteeList = () => {
  const { dragos } = useDragosValue();
  const renteeDragosRentedInfoValue = renteeDragosRentedInfo(
    dragos as DragoInfo[]
  );
  const renteeInfoStatsValue = renteeInfoStats(renteeDragosRentedInfoValue);
  return (
    <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {renteeInfoStatsValue.map((renteeInfoStat) => (
        <RenteeCard
          key={renteeInfoStat.walletAddress}
          data={renteeInfoStat as RenteeInfoStats}
        />
      ))}
    </div>
  );
};
