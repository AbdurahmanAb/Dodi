import { useCollapse } from "react-collapsed";
import "./contracts.scss";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Contracts = () => {
  const Added = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Contract Added",
      icon: "success",
      timer: 1500,
    });
  };
  const [open, setOpen] = useState(false);
  const [contract, setContract] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const Truking = () => {
    onOpenModal();
    setContract("Trucking");
  };
  const Driling = () => {
    onOpenModal();
    setContract("Driling");
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <Helmet>
        <title>DODI || Contracts</title>
      </Helmet>

      <div className="container mt-5">
        <h1 className="my-4">Add Contracts</h1>
        {contract === "Driling" && (
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
        )}
        {contract === "Trucking" && (
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Trucking</h2>
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
        )}

        <div className="buttons m-5 ">
          <button
            className="btn btn-lg btn-info text-white mr-2"
            onClick={Truking}
          >
            Add Trucking
          </button>
          <button
            className="btn btn-lg btn-primary text-white"
            onClick={Driling}
          >
            Add Driling
          </button>
        </div>
        {/* <form className="Contracts mb-5">
          <input
            type="text"
            placeholder="Contract"
            className="Contracts__input"
          />

          <div className="select">
            <p>contract type</p>

            <select name="select" id="select" className="btn btn-primary">
              <option value="">permanet</option>
              <option value="">contract</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Driling"
            className="Contracts__input"
          />

          <input
            type="date"
            id="date"
            className="Contracts__input"
            placeholder="start Date"
          />
          <input type="text" placeholder="Cost" className="Contracts__input" />

          <input
            type="text"
            placeholder="Name -Amount Per diem cost"
            className="Contracts__input"
          />

          <input
            type="text"
            placeholder="Employee list"
            className="Contracts__input"
          />
          <input
            type="text"
            placeholder="Transportation"
            className="Contracts__input"
          />
          <input
            type="text"
            placeholder="Trip Beginging"
            className="Contracts__input"
          />
          <input
            type="text"
            placeholder="Trip Destination"
            className="Contracts__input"
          />
          <input
            type="number"
            placeholder="Maintainance Cost"
            className="Contracts__input"
          />
          <input
            type="text"
            placeholder="Maintainance Cost"
            className="Contracts__input"
          />
          <button
            className="Contracts__btn btn btn-lg btn-primary"
            onClick={(e) => Added(e)}
          >
            Add contract
          </button>
        </form> */}
        <h1>View Contracts</h1>
        <div className="gridl">
          <div className="card text-center bg-warning Contracts__card">
            <div className="card__salry p-4">
              <h3 className="card__header">Building Contract</h3>
              <p className="text ">Cost: +$123,456</p>
              <div className="btns">
                <button {...getToggleProps()} className="btn  btn-success">
                  {isExpanded ? "Hide" : "View"}
                </button>
                <button className="btn btn-info mx-2">Update</button>
                <button className="btn btn-danger mx-2 ">Delete</button>
              </div>

              <section {...getCollapseProps()}>
                <ul className="list">
                  <li>
                    contract Recivable : <span>yes</span>
                  </li>
                  <li>contract Type : Permant </li>
                  <li>Driling: Permant</li>
                  <li>Start Date : Permant</li>
                  <li>Cost: Permant</li>
                  <li>Amount per Drim Cost: Permant </li>
                  <li>Employee List : Permant </li>
                  <li>Transportation : Permant</li>
                  <li>Trip Beging : Permant</li>
                  <li>Trip Destination : Permant </li>
                  <li>Maintaince cost : Permant</li>
                  <li>Type: Permant </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
