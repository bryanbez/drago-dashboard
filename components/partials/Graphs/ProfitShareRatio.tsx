import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg">
        <p className="text-sm font-semibold text-gray-900 mb-1">
          Share Ratio: {label}
        </p>
        <p className="text-sm text-indigo-600 font-medium">
          Drago Count: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function ShowProfitShareRatioGraph({
  data,
  label,
}: {
  data: { [key: string]: number };
  label: string;
}) {
  const chartData = Object.entries(data)
    .map(([key, value]) => ({
      name: key,
      value: value,
    }))
    .map((item) => ({
      ...item,
      name: item.name
        .replace("0.1", "10/90")
        .replace("0.2", "20/80")
        .replace("0.3", "30/70")
        .replace("0.4", "40/60")
        .replace("0.5", "50/50")
        .replace("0.6", "60/40")
        .replace("0.7", "70/30")
        .replace("0.8", "80/20")
        .replace("0.9", "90/10")
        .replace("1.0", "100/0"),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-6">{label}</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F9FAFB" }} />
            <Bar
              dataKey="value"
              fill="#4F46E5"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
