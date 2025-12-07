import { DragoDisplay } from "@/components/layout/DragoDisplay";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Dragos() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
              Dragos
            </h2>
            <DragoDisplay />
          </div>
        </main>
      </div>
    </div>
  );
}
