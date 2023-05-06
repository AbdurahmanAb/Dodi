import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./contrats.scss";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Contrats = () => {
  const Added = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Contrat Added",
      icon: "success",
      timer: 1500,
    });
  };
  return (
    <div>
      <Helmet>
        <title>DODI || Contrats</title>
      </Helmet>
      <Navbar />
      <div className="container mt-5">
        <h1 className="my-4">Add Contrats</h1>
        <form className="Contrats">
          <input type="text" placeholder="Name" className="Contrats__input" />
          <input type="date" className="Contrats__input" />
          <input type="text" placeholder="Salary" className="Contrats__input" />
          <input type="text" placeholder="Amount" className="Contrats__input" />
          <button
            className="Contrats__btn btn btn-primary"
            onClick={(e) => Added(e)}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contrats;
