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

// Sample reservation data
const data = [
  { date: "12 Jun", booked: 59, canceled: 12 },
  { date: "13 Jun", booked: 62, canceled: 11 },
  { date: "14 Jun", booked: 60, canceled: 15 },
  { date: "15 Jun", booked: 70, canceled: 7 },
  { date: "16 Jun", booked: 74, canceled: 10 },
  { date: "17 Jun", booked: 63, canceled: 8 },
  { date: "18 Jun", booked: 49, canceled: 20 },
];

// Component
export const ChartReservations = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barGap={10} barCategoryGap={10}>
        {/* Grid Lines */}
        <CartesianGrid vertical={false} strokeDasharray="8 8" />

        {/* X-Axis */}
        <XAxis dataKey="date" tick={{ fill: "#999", fontSize: 12 }} />

        {/* Y-Axis */}
        <YAxis tick={{ fill: "#999", fontSize: 12 }} />

        {/* Tooltip */}
        <Tooltip
          formatter={(value) => `${value}`}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #eee",
          }}
        />

        {/* Legend */}
        <Legend
          align="start"
          verticalAlign="top"
          iconSize={7}
          wrapperStyle={{ paddingBottom: "10px" }}
        />

        {/* Booked Bar */}
        <Bar
          dataKey="booked"
          stackId="a"
          fill="#D5F6E5"
          radius={[10, 10, 0, 0]} // Rounded tops
          barSize={30} // Bar thickness
        />

        {/* Canceled Bar */}
        <Bar
          dataKey="canceled"
          stackId="a"
          fill="#E7F68E"
          radius={[10, 10, 0, 0]} // Rounded tops
          barSize={30} // Bar thickness
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
