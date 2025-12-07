import DashboardCards from "@/components/sections/DashboardCards";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2> */}
          {/* Commented out explicit title for now as we can have sections inside DashboardCards or page content */}
          <DashboardCards />

          {/* Placeholder for future content area */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Example empty widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400">
              Content Placeholder (Chart/Table)
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400">
              Content Placeholder (Recent Activity)
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
