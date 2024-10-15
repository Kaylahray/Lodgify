import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

// Define color palette for each section
const COLORS = [
  "#D5F6E5",
  "#BCD9CA",
  "#CCD97E",
  "#E7F68E",
  "#F3FBC7",
  "#EAFBF2",
];

// Booking data
const initialData = [
  { platform: "Direct Booking", value: 61 },
  { platform: "Booking.com", value: 12 },
  { platform: "Agoda", value: 11 },
  { platform: "Airbnb", value: 9 },
  { platform: "Hotels.com", value: 5 },
  { platform: "Others", value: 2 },
];

// Tooltip formatter
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-md text-center">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-xl font-bold">
          {payload[0].value}% (${payload[0].payload.value})
        </p>
      </div>
    );
  }

  return null;
};

// Component
export const ChartBooking = ({ className = "" }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Assuming you'd load data asynchronously
    setData(initialData); // For now, setting static data
  }, []);

  const total = data.reduce((acc, cur) => acc + cur.value, 0); // Total value calculation for percentages

  return (
    <div className={className}>
      <div className="grid grid-cols-2">
        {/* Pie Chart Section */}
        <div className="flex items-center justify-center w-full col-span-1">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="platform"
                innerRadius="60%"
                outerRadius="100%"
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Section */}
        <div className="col-span-1 p-4 mx-auto">
          <ul className="space-y-4">
            {data.map((entry, index) => {
              const percentage = ((entry.value / total) * 100)
                .toFixed(2)
                .replace(".00", "");
              return (
                <li
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <span
                      className="block w-2 h-2 mr-3 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                    ></span>
                    <span className="mr-2 font-bold text-gray-800">
                      {percentage}%
                    </span>
                    <span className="text-gray-500">
                      {entry.platform}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
