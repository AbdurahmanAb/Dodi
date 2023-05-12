import Navbar from "../components/Navbar/Navbar";
import Graphs, { PieChart } from "../components/Chart/Graphs";
import { Data } from "../components/Chart/dummy2";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";
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
  const [allview, setAllview] = useState(false);

  const viewAll = useRef(null);
  const viewBtn = () => {
    viewAll.current.style.visibility = "visible";
    viewAll.current.style.opacity = "1";
    viewAll.current.style.display = "block";
    setAllview(true);
  };
  const hideBtn = () => {
    viewAll.current.style.visibility = "hidden";
    viewAll.current.style.opacity = "0";
    viewAll.current.style.display = "none";
    setAllview(false);
  };
  return (
    <div>
      <Helmet>
        <title>DODI || HOME</title>
      </Helmet>

      <h1>DashBoard</h1>
      <div className="container">
        <div className="Notifications m-5">
          <div className="relative  px-5 py-2">
            <h4>Notifications</h4>
            <span className="Icon">4</span>
          </div>
          <div className="notications__card">
            <div className="">
              <div
                className="card  text-center bg-light Contracts__card text-dark fill"
                style={{ width: "100%" }}
              >
                <div className="card__salary ">
                  <Modal open={open} onClose={onCloseModal} center>
                    <div className="mt-2">
                      <h2>Notification View</h2>
                      <h4>New Employee Registered</h4>
                      <ul>
                        <li>Employee Name: Abdu</li>
                        <li>Salary $1,000,000</li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Error architecto, dicta excepturi animi natus
                        optio id, ad labore maxime sunt quaerat eligendi quam a
                        expedita earum quis. Consequatur maiores sequi sed
                        exercitationem nam magnam delectus ipsa voluptatum
                        eligendi facilis debitis at modi, maxime sint, minima,
                        temporibus saepe fuga facere quas?
                      </ul>
                    </div>
                  </Modal>
                  <div className="card__strip">
                    <h5 className="card__header text-dark">
                      New Employee Registered
                    </h5>
                    <p className="text ">23:00, GMT</p>
                    <button
                      className="button btn btn-lg btn-info text-white "
                      onClick={onOpenModal}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="hide" ref={viewAll}>
                <div
                  className="card  text-center bg-light Contracts__card text-dark fill"
                  style={{ width: "100%" }}
                >
                  <div className="card__salary ">
                    <Modal open={open} onClose={onCloseModal} center>
                      <div className="mt-2">
                        <h2>Notification View</h2>
                        <h4>New Employee Registered</h4>
                        <ul>
                          <li>Employee Name: Abdu</li>
                          <li>Salary $1,000,000</li>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Error architecto, dicta excepturi animi natus
                          optio id, ad labore maxime sunt quaerat eligendi quam
                          a expedita earum quis. Consequatur maiores sequi sed
                          exercitationem nam magnam delectus ipsa voluptatum
                          eligendi facilis debitis at modi, maxime sint, minima,
                          temporibus saepe fuga facere quas?
                        </ul>
                      </div>
                    </Modal>
                    <div className="card__strip">
                      <h5 className="card__header text-dark">
                        New Employee Registered
                      </h5>
                      <p className="text ">23:00, GMT</p>
                      <button
                        className="button btn btn-lg btn-info text-white "
                        onClick={onOpenModal}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="card  text-center bg-light Contracts__card text-dark fill"
                  style={{ width: "100%" }}
                >
                  <div className="card__salary ">
                    <Modal open={open} onClose={onCloseModal} center>
                      <div className="mt-2">
                        <h2>Notification View</h2>
                        <h4>New Employee Registered</h4>
                        <ul>
                          <li>Employee Name: Abdu</li>
                          <li>Salary $1,000,000</li>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Error architecto, dicta excepturi animi natus
                          optio id, ad labore maxime sunt quaerat eligendi quam
                          a expedita earum quis. Consequatur maiores sequi sed
                          exercitationem nam magnam delectus ipsa voluptatum
                          eligendi facilis debitis at modi, maxime sint, minima,
                          temporibus saepe fuga facere quas?
                        </ul>
                      </div>
                    </Modal>
                    <div className="card__strip">
                      <h5 className="card__header text-dark">
                        New Employee Registered
                      </h5>
                      <p className="text ">23:00, GMT</p>
                      <button
                        className="button btn btn-lg btn-info text-white "
                        onClick={onOpenModal}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-success p-2 text-center" onClick={viewBtn}>
            view all
          </button>
          {allview && (
            <button
              className="btn btn-danger p-2 mx-2 text-center"
              onClick={hideBtn}
            >
              Hide
            </button>
          )}
        </div>

        <Graphs chartData={userData} />
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Home;
