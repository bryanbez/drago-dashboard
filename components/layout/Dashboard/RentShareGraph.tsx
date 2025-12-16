"use client";

import ShowProfitShareRatioGraph from "../../partials/Graphs/ProfitShareRatio";
import type { DragoInfo } from "@/app/types/drago";
import { getCountOfDragosInEveryShareRatio } from "@/app/lib/utils/dragoGraphData";
import { useFetchDragos } from "@/app/hooks/useFetchDragos";
export function RentShareGraph() {
  const { dragos } = useFetchDragos();
  return (
    <div className="relative w-full h-full">
      <ShowProfitShareRatioGraph
        data={getCountOfDragosInEveryShareRatio(dragos as DragoInfo[])}
        label="Drago Rented Share Ratio (Rentee/Renter)"
      />
    </div>
  );
}
