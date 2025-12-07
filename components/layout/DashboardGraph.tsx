"use client";

import ShowProfitShareRatioGraph from "../partials/Graphs/ProfitShareRatio";
import type { DragoInfo } from "@/app/types/drago";
import { getCountOfDragosInEveryShareRatio } from "@/app/lib/utils/dragoGraphData";
import { useDragosValue } from "@/app/context/dragos";

export function DashboardGraph() {
  const { dragos } = useDragosValue();
  return (
    <ShowProfitShareRatioGraph
      data={getCountOfDragosInEveryShareRatio(dragos as DragoInfo[])}
      label="Drago Rented Share Ratio (Rentee/Renter)"
    />
  );
}
