import DashboardCards from "@/components/sections/DashboardCards";
import DashboardLayout from "@/components/layout/Dashboard/DashboardLayout";
import { DashboardGraph } from "@/components/layout/Dashboard/DashboardGraph";
import { DashboardTable } from "@/components/layout/Dashboard/DashboardTable";

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardCards />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardGraph />
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
          <DashboardTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
