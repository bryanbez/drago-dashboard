import { DragoCardProps } from "@/app/types/components";
import Image from "next/image";

const DragoCard: React.FC<DragoCardProps> = ({ drago }) => {
  const isRented = drago.rent.status === 1;
  const unclaimedDST = drago.rent?.stats?.unclaimedProfit || 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 group">
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={drago.dragoImageURL || "/drago-placeholder.png"}
          alt={`Drago #${drago.tokenId}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold shadow-sm ${
            isRented
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-gray-100 text-gray-700 border border-gray-200"
          }`}>
          {isRented ? "Rented" : "Available"}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-900">
            Drago #{drago.tokenId}
          </span>
          <span className="text-xs text-gray-500">Lvl {drago.level}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Unclaimed DST
          </span>
          <span className="text-lg font-bold text-indigo-600">
            {unclaimedDST.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DragoCard;
