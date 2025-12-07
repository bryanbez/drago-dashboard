"use client";

import { DST_TO_USD_RATE } from "@/app/lib/constants";
import Card from "../partials/Card/Card";
import { useDragosDashboardCard } from "@/app/hooks/useDragosDashboardCard";
import {
  DragosIcon,
  UnclaimedDSTIcon,
  TotalDSAIcon,
  UnrentedDragosIcon,
  RentedDragosIcon,
} from "../partials/svg";

export default function DashboardCards() {
  const {
    countDragosOwnedValue,
    countTotalDSAValue,
    countUnclaimedDSTValue,
    countUnrentedDragosValue,
    countRentedDragosValue,
  } = useDragosDashboardCard();

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          value={countDragosOwnedValue()}
          label="Dragos Owned"
          icon={<DragosIcon />}
        />
        <Card
          value={countRentedDragosValue()}
          label="Rented Dragos"
          icon={<RentedDragosIcon />}
        />

        <Card
          value={countUnrentedDragosValue()}
          label="Unrented Dragos"
          icon={<UnrentedDragosIcon />}
        />

        <Card
          value={countTotalDSAValue()}
          label="Total DSA"
          icon={<TotalDSAIcon />}
        />
        <Card
          value={countUnclaimedDSTValue()}
          label="Unclaimed DST"
          icon={<UnclaimedDSTIcon />}
        />

        <Card
          value={(countUnclaimedDSTValue() * DST_TO_USD_RATE).toFixed(2)}
          label="Estimate $ of Unclaimed DST"
          icon={<TotalDSAIcon />}
          isDollarSign={true}
        />
      </div>
    </div>
  );
}
