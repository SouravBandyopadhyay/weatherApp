import { Text, Box } from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { changeTime } from "./HomePage";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 22,
        },
      },
    },
    title: {
      display: true,
      text: "Temperature Forecast",
    },
  },
  y: {
    title: { display: true, text: "Temp C" },
  },
};
export function ForeCastChart({ data }) {
  console.log(data);
  const labels = data.map((el) => changeTime(el.dt));
  const Chartdata = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Temperature",
        data: data.map((el) => el.main.temp),
        borderColor: "#742774",
        backgroundColor: "rgba(253, 122, 335, 0.4)",
        tension: 0.2,
        borderWidth: 3,
        borderDash: [1],
        showLine: false,
      },
    ],
  };

  return (
    <Box w="full">
      <Line options={options} data={Chartdata} />
    </Box>
  );
}
