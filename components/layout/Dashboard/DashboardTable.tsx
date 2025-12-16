"use client";

import type { DragoInfo } from "@/app/types/drago";
import { DragosNearRentExpiry } from "../../partials/Table/dragosNearRentExpiryTable";
import { useFetchDragos } from "@/app/hooks/useFetchDragos";
export function DashboardTable() {
  const { dragos } = useFetchDragos();
  return (
    <div className="w-full relative">
      <DragosNearRentExpiry dragos={dragos as DragoInfo[]} />
    </div>
  );
}
