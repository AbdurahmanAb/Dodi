import Navbar from "../../components/Navbar/Navbar";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import "./report.scss";

const Report = () => {
  const months = new Array(12)
    .fill()
    .map((_, monthIndex) =>
      new Date(0, monthIndex).toLocaleString("default", { month: "long" })
    );

  const option = useRef(null);
  return (
    <div>
      <Helmet>
        <title>DODI || Reports</title>
      </Helmet>

      <div className="container mt-5">
        <h2>Reports</h2>
        <div className="m-2 p-3">
          <span className="m-2">Select Month</span>
          <select className="p-2 mx-1 bg-primary  select">
            {months.map((month, i) => (
              <option key={i} className="bg-red" value={month} ref={option}>
                {month}
              </option>
            ))}
          </select>
          <div className="gridl">
            <div className="card text-center bg-warning">
              <div className="card__salry p-4">
                <h3 className="card__header">Total Salarey</h3>
                <span className="text">+$123,456</span>
              </div>
            </div>
            <div className="card text-center bg-success">
              <div className="card__salry p-4">
                <h3 className="card__header">
                  Number of contractstotal expense
                </h3>
                <span className="text">+$123,456</span>
              </div>
            </div>
            <div className="card text-center bg-info">
              <div className="card__salry p-4">
                <h3 className="card__header">Total earned</h3>
                <span className="text">+$123,456</span>
              </div>
            </div>

            <div className="card text-center bg-danger">
              <div className="card__salry p-4">
                <h3 className="card__header">Net profit</h3>
                <span className="text">+$123,456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
