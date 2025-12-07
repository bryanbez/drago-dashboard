import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
              Analytics
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
}
