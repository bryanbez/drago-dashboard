"use client";

import type { DragoInfo } from "@/app/types/drago";
import { DragosNearRentExpiryTable } from "../../partials/Table/dragosNearRentExpiryTable";
import { useDragosValue } from "@/app/context/dragos";
export function DashboardTable() {
  const { dragos } = useDragosValue();
  return (
    <div className="w-full relative">
      <DragosNearRentExpiryTable dragos={dragos as DragoInfo[]} />
    </div>
  );
}
