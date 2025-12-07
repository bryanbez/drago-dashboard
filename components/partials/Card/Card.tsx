import { CardProps } from "./CardType";

const Card: React.FC<CardProps> = ({ value, label, icon, isDollarSign }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-start justify-between border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          {label}
        </span>
        <span className="text-2xl font-bold text-gray-800 tracking-tight">
          {isDollarSign ? "$" : ""}
          {value}
        </span>
      </div>
      {icon && (
        <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 shadow-sm">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Card;
