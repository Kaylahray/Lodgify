import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { FaChevronDown } from "react-icons/fa6";

const data = [
  { month: "Dec 2027", revenue: 270000 },
  { month: "Jan 2028", revenue: 200000 },
  { month: "Feb 2028", revenue: 315060 },
  { month: "Mar 2028", revenue: 250000 },
  { month: "Apr 2028", revenue: 360000 },
  { month: "May 2028", revenue: 250000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#E7F68E] p-2 rounded-md shadow-md text-center">
        <p className="font-semibold">Total Revenue</p>
        <p className="text-xl font-bold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

export const ChartRevenue = () => {
  return (
    <div className="text-sm p-2 w-full">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorRevenue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="rgba(213, 246, 229, 1)"
                stopOpacity={1}
              />
              <stop
                offset="50%"
                stopColor="rgba(213, 246, 229, 0.5)"
                stopOpacity={0.5}
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 0)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="8 8" />
          <XAxis dataKey="month" tickLine={false} />
          <YAxis
            tickLine={false}
            tickFormatter={(value) =>
              `$${(value / 1000).toLocaleString()}K`
            }
            domain={[0, 400000]} // Set Y-axis range
            interval={0}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          {data.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.month}
              stroke="#E7F68E"
              strokeDasharray="3 3"
              ifOverflow="extendDomain"
              isFront={false}
              strokeOpacity={0.3}
            />
          ))}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#e7f68e"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={4}
            dot={{
              r: 8,
              fill: "#fff",
              stroke: "#e7f68e",
              strokeWidth: 4,
            }}
            activeDot={{
              r: 10,
              fill: "#e7f68e",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
