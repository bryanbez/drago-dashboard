"use client";
import DashboardCards from "@/components/sections/DashboardCards";
import { DashboardGraph } from "./DashboardGraph";
import { DashboardTable } from "./DashboardTable";

export default function DashboardLayout() {
  return (
    <>
      <DashboardCards />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardGraph />
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
          <DashboardTable />
        </div>
      </div>
    </>
  );
}
