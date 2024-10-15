import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LayoutCard from "../../components/LayoutCard";

export const ReviewChart = () => {
  // Define chart data
  const data = [
    { date: "12 Jun", positive: 27000 * 2, negative: 31000 },
    { date: "13 Jun", positive: 20000 * 2, negative: 28000 },
    { date: "14 Jun", positive: 15000 * 2, negative: 15800 },
    { date: "15 Jun", positive: 24000 * 2, negative: 16500 },
    { date: "16 Jun", positive: 19500 * 2, negative: 20000 },
    { date: "17 Jun", positive: 27000 * 2, negative: 17500 },
    { date: "18 Jun", positive: 25000 * 2, negative: 16000 },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const label = payload[0].payload.date;
      const positiveValue = Math.abs(payload[0].value);
      const negativeValue = Math.abs(payload[1].value);
      return (
        <div className="bg-white border border-gray-300 rounded">
          <p className="label">{label}</p>
          <p className="positive">Positive: {positiveValue}K</p>
          <p className="negative">Negative: -{negativeValue}K</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LayoutCard>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, 60000]}
            ticks={[0, 15000, 30000, 45000, 60000]}
            tickFormatter={(value) => {
              if (value >= 35000) {
                return value / 2 + "K";
              }
              return value === 30000 ? 0 : value + "K";
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingBottom: "20px",
            }}
          />
          <Bar
            dataKey="positive"
            fill="#D5F6E5"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="negative"
            fill="#E7F68E"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </LayoutCard>
  );
};
