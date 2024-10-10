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

const data = [
  {
    name: "Occupancy",
    occupied: 286,
    reserved: 87,
    available: 32,
    notReady: 13,
  },
];

const CustomLegend = () => {
  const legendItems = [
    { label: "Occupied", color: "#AFE9E0", value: 286 }, // Replace with your custom color codes
    { label: "Reserved", color: "#F5EEA6", value: 87 },
    { label: "Available", color: "#FCE482", value: 32 },
    { label: "Not Ready", color: "#D9E58A", value: 13 },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 text-sm mt-2">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {/* Color Indicator */}
          <div
            className="h-8 w-1 mr-2 rounded"
            style={{ backgroundColor: item.color }}
          />
          {/* Label */}
          <div className="flex flex-col">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
const LinearBar = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart layout="vertical" data={data}>
        <Bar
          dataKey="occupied"
          stackId="a"
          fill="#AFE9E0"
          barSize={50}
          barGap={5}
        />
        <Bar dataKey="reserved" stackId="a" fill="#F5EEA6" />
        <Bar dataKey="available" stackId="a" fill="#FCE482" />
        <Bar dataKey="notReady" stackId="a" fill="#D9E58A" />
        <XAxis type="number" domain={[0, 286]} hide />
        <YAxis dataKey="name" type="category" hide />
        <Tooltip />
        <Legend content={<CustomLegend />} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default LinearBar;
