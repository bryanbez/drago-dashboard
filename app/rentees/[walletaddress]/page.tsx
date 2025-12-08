"use client";
import { RenteeInfoComponent } from "@/components/layout/Rentees/RenteeInfo";
import { useRenteeInfoStore } from "@/app/lib/stores/storeRenteInfo";

// plan is pass the object then revalidate the data using swr
export default function RenteeDetailPage() {
  const { renteeInfo } = useRenteeInfoStore();

  return <RenteeInfoComponent {...renteeInfo} />;
}
