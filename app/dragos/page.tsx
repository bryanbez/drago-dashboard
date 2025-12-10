"use client";
import { DragoDisplay } from "@/components/layout/DragoDisplay";

export default function Dragos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
        Dragos
      </h2>
      <DragoDisplay />
    </div>
  );
}
