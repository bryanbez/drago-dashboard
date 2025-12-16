"use client";

import type { DragoInfo } from "@/app/types/drago";
import { getDragosOnNearExpiryDate } from "@/app/lib/utils/dragoDashboard";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

const columns = [
  {
    accessorKey: "id",
    header: "Drago ID",
  },
  {
    accessorKey: "rent.expireDate",
    header: "Expire Date",
    cell: ({ getValue }: { getValue: () => string | Date }) => {
      const date = new Date(getValue());
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${month}-${day}-${year}  ${hours}:${minutes}`;
    },
  },
];

export function DragosNearRentExpiry({ dragos }: { dragos: DragoInfo[] }) {
  "use no memo";
  // to avoid browser crash by re-rendering the table data
  const dragosOnNearExpiryDate: DragoInfo[] = useMemo(
    () => getDragosOnNearExpiryDate(dragos),
    [dragos]
  );

  const table = useReactTable({
    data: dragosOnNearExpiryDate,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Rented Dragos Near Expiry
        </h3>
        {/* <span className="px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
          {table.getRowModel().rows.length} Action(s) Required
        </span> */}
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-100 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <table className="w-full text-left text-sm relative">
          <thead className="bg-gray-50 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 font-medium text-gray-500 border-b border-gray-100 bg-gray-50">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors group">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
