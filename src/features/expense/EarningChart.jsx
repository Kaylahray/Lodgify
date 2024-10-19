import { FaChevronDown, FaRegCalendar } from "react-icons/fa6";
import { useEffect, useRef } from "react";

import { Chart } from "chart.js/auto";

export const EarningsChart = () => {
  const chartRef = useRef(null); // Create a ref to hold the canvas element
  const chartInstance = useRef(null); // Hold the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d"); // Get canvas context

    // Define chart data and configuration
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Expense",
          data: [
            25000, 20000, 14000, 24000, 26000, 29000, 17000, 15000,
            16700, 28000, 17000, 29000,
          ],
          fill: false,
          barThickness: 27,
          borderRadius: 6,
          backgroundColor: "#D5F6E5",
          hoverBackgroundColor: "#D5F6E5",
          hoverBorderColor: "#CCD97E52",
          hoverBorderWidth: 6,
        },
        {
          label: "Income",
          data: [
            -17000, -19000, -15800, -23000, -26000, -29700, -15500,
            -14500, -15800, -27000, -16000, -15500,
          ],
          fill: false,
          barThickness: 27,
          borderRadius: 6,
          backgroundColor: "#E7F68E",
          hoverBackgroundColor: "#E7F68E",
          hoverBorderColor: "#CCD97E52",
          hoverBorderWidth: 6,
        },
      ],
    };

    const config = {
      type: "bar", // Type of chart
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            align: "start",
            position: "top",
            labels: {
              boxWidth: 7,
              boxHeight: 7,
              textAlign: "left",
              borderRadius: 2,
              useBorderRadius: true,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                const value = Math.abs(context.raw);
                return `${label}: ${
                  context.raw < 0 ? "-" : ""
                }$${value.toLocaleString()}`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            border: { display: false },
          },
          y: {
            stacked: true,
            grid: { lineWidth: 0.5 },
            border: { display: false, dash: [8, 8] },
          },
        },
      },
    };

    // Initialize chart instance
    chartInstance.current = new Chart(ctx, config);

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white">
      <canvas id="bar-chart" ref={chartRef}></canvas>
    </div>
  );
};
