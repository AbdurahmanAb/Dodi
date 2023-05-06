import Navbar from "../components/Navbar/Navbar";
import Graphs, { PieChart } from "../components/Chart/Graphs";
import { Data } from "../components/Chart/dummy2";
import { useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Salary",
        data: Data.map((data) => data.Salary),
      },
    ],
  });
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <Graphs chartData={userData} />
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Home;
