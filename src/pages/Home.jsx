import Navbar from "../components/Navbar/Navbar";
import Graphs, { PieChart } from "../components/Chart/Graphs";
import { Data } from "../components/Chart/dummy2";
import { useState } from "react";
import { Helmet } from "react-helmet";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
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
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <Helmet>
        <title>DODI || HOME</title>
      </Helmet>

      <h1>DashBoard</h1>
      <div className="container">
        <div className="Notifications m-5">
          <h2>Notifications</h2>
          <div className="notications__card">
            <div className="gridl">
              <div className="card text-center bg-light Contracts__card text-dark">
                <div className="card__salry p-4">
                  <Modal open={open} onClose={onCloseModal} center>
                    <h2>Driling</h2>
                    <form className="Contracts mb-5">
                      <input
                        type="text"
                        placeholder="Contract"
                        className="Contracts__input"
                      />

                      <input
                        type="text"
                        placeholder="Driling"
                        className="Contracts__input"
                      />
                    </form>
                  </Modal>
                  <button
                    className="btn btn-lg btn-info text-white mr-2"
                    onClick={onOpenModal}
                  >
                    details
                  </button>
                  <h5 className="card__header text-dark">
                    New Employee Registered
                  </h5>
                  <p className="text ">23:00, GMT</p>
                </div>
              </div>
              <div className="card text-center bg-light Contracts__card text-dark">
                <div className="card__salry p-4">
                  <h5 className="card__header text-dark">
                    New Employee Registered
                  </h5>
                  <p className="text ">23:00, GMT</p>
                </div>
              </div>
              <div className="card text-center bg-light Contracts__card text-dark">
                <div className="card__salry p-4">
                  <h5 className="card__header text-dark">
                    New Employee Registered
                  </h5>
                  <p className="text ">23:00, GMT</p>
                </div>
              </div>
              <div className="card text-center bg-light Contracts__card text-dark">
                <div className="card__salry p-4">
                  <h5 className="card__header text-dark">
                    New Employee Registered
                  </h5>
                  <p className="text ">23:00, GMT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Graphs chartData={userData} />
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Home;
