import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, ArcElement } from 'chart.js';

// Register required Chart.js components
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler, ArcElement
);

const HardcodedChart = ({labels, dataFeed}) => {
  // Hardcoded data for the Line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 150, 200, 180, 220],
        fill: "start",
        backgroundColor: (context: ScriptableContext<line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      },
    ],
  };

  // Chart options with tooltip configuration
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label,
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='line_block'>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HardcodedChart;
