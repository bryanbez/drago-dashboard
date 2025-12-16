"use client";

import type { DragoInfo } from "@/app/types/drago";
import { useFetchDragos } from "@/app/hooks/useFetchDragos";
import { DragosNearRentExpiryTable } from "@/components/partials/Table/DragosNearRentExpiry";
export function DashboardTable() {
  const { dragos } = useFetchDragos();
  return (
    <div className="w-full relative">
      <DragosNearRentExpiryTable dragos={dragos as DragoInfo[]} />
    </div>
  );
}
