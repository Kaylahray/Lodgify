export const totalCenterPlugin = {
  id: "totalCenterPlugin",
  afterDraw: (chart) => {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    const total = chart.data.datasets[0].data.reduce(
      (acc, curr) => acc + curr,
      0
    );
    let title = chart.data.datasets[0].label;
    title = title.charAt(0).toUpperCase() + title.slice(1);

    ctx.save();
    ctx.font = "500 24px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const x = width / 2;
    const y = height / 2;

    ctx.fillText(`$${total.toLocaleString()}`, x, y - 10);

    ctx.font = "normal 14px Arial";
    ctx.fillStyle = "#666";

    ctx.fillText("Total " + title, x, y + 15);

    ctx.restore();
  },
};

export const gaugeCenterPlugin = {
  id: "gaugeCenterPlugin",
  afterDraw: (chart) => {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    const total = chart.data.datasets[0].data[0];

    ctx.save();
    ctx.font = "600 34px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const x = width / 2;
    const y = height / 2;

    ctx.fillText(total, x, y + 50);

    ctx.font = "normal 14px Arial";
    ctx.fillStyle = "#666";
    ctx.fillText("Rating", x, y + 15);

    ctx.font = "normal 16px Arial";
    ctx.fillStyle = "#666";
    ctx.fillText("/5", x + 32, y + 55);

    ctx.restore();
  },
};

export const verticalLineOnHover = {
  id: "verticalLineOnHover",
  afterDraw: (chart) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      const x = chart.tooltip._active[0].element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([8, 8]);
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(230, 237, 234, 1)";
      ctx.stroke();
      ctx.restore();
    }
  },
};
