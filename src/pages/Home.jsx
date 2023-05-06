import Navbar from "../components/Navbar/Navbar";
import Graphs, { PieChart } from "../components/Chart/Graphs";
import { Data } from "../components/Chart/dummy2";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Profit",
        data: Data.map((data) => data.Salary),
      },
    ],
  });
  return (
    <div>
      <Helmet>
        <title>DODI || HOME</title>
      </Helmet>

      <div className="container">
        <h1>DashBoard</h1>
        <Graphs chartData={userData} />
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Home;
