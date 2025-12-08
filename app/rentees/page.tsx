import { RenteeList } from "@/components/layout/Rentees/RenteeList";

export default function RenteesPage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
        Your Rentees Page
      </h2>
      <RenteeList />
    </>
  );
}
