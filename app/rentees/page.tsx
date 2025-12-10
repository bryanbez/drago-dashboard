import { RenteeList } from "@/components/layout/Rentees/RenteeList";

export default function RenteesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
        Rentees
      </h2>

      <RenteeList />
    </div>
  );
}
