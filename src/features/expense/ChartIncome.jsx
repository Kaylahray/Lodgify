import { useEffect, useRef, useState } from "react";

import { Chart } from "chart.js/auto";
import { totalCenterPlugin } from "../../charts/chart.plugins.js";

// eslint-disable-next-line react/prop-types
export const ChartIncome = ({ className = "" }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [ctype, setCtype] = useState("expense");

  const [data, setData] = useState({
    labels: [""],
    datasets: [{ data: [0], backgroundColor: [""] }],
  });

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels:
        ctype === "income"
          ? [
              "Salaries and Wages",
              "Utilitie",
              "Maintenance and Repairs",
              "Supplies",
              "Marketing and Advertising",
              "Miscellaneous",
            ]
          : [
              "Food",
              "Drinks",
              "Entertainment",
              "Transport",
              "Cloths",
              "Miscellaneous",
            ],
      datasets: [
        {
          label: ctype,
          data:
            ctype === "income"
              ? [15000, 5000, 4000, 3000, 2000, 1000]
              : [25000, 1000, 3000, 5000, 1000, 1000],
          backgroundColor: [
            "#D5F6E5",
            "#BCD9CA",
            "#CCD97E",
            "#E7F68E",
            "#F3FBC7",
            "#EAFBF2",
          ],
        },
      ],
    };

    setData(data);

    const config = {
      type: "doughnut",
      data,
      options: {
        cutout: "75%",
        spacing: 3,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                return `${label}: $${context.raw.toLocaleString()}`;
              },
            },
          },
        },
      },
      plugins: [totalCenterPlugin],
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [ctype]);

  const total = data.datasets[0].data.reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <div className={className}>
      <div
        className={`flex items-center justify-center mb-5 text-xs`}
      >
        <div className="flex bg-gray-100 rounded-md">
          <button
            className={`text-center w-40 h-8 gap-1 px-4 ${
              ctype === "income" ? "bg-[#E7F68E]" : ""
            } rounded-md`}
            onClick={() => setCtype("income")}
          >
            Income
          </button>
          <button
            className={`text-center w-40 h-8 gap-1 px-4 ${
              ctype === "expense" ? "bg-[#E7F68E]" : ""
            } rounded-md`}
            onClick={() => setCtype("expense")}
          >
            Expense
          </button>
        </div>
      </div>
      {/* <div className="flex"> */}
      <div className="mx-auto max-w-80">
        <canvas id="bar-chart" ref={chartRef}></canvas>
      </div>
      {/* </div> */}
      <div className="max-w-lg p-4 mx-auto">
        <ul className="space-y-4">
          {data.labels.map((e, i) => {
            const value = data.datasets[0].data[i];
            const percentage = ((value / total) * 100)
              .toFixed(2)
              .replace(".00", "");
            return (
              <li
                key={e}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span
                    className="block w-8 h-3 mr-3 rounded-sm"
                    style={{
                      backgroundColor:
                        data.datasets[0].backgroundColor[i],
                    }}
                  ></span>
                  <span className="text-gray-800">
                    {data.labels[i]}{" "}
                    <span className="text-gray-500">
                      ({percentage}%)
                    </span>
                  </span>
                </div>
                <span className="text-gray-800">
                  ${data.datasets[0].data[i].toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
