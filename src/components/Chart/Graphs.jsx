import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Graphs = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default Graphs;

export const PieChart = ({ chartData }) => {
  return (
    <div className="mt-5 ">
      <Pie data={chartData} />
    </div>
  );
};
