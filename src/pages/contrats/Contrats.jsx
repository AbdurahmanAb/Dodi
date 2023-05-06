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

      <div className="container mt-5">
        <h1 className="my-4">Add Contrats</h1>
        <form className="Contrats mb-5">
          <div className="radios">
            <div className="form__radio--group">
              <p>Contrat Recivable?</p>
              <input
                type="radio"
                id="large-radio"
                className="form__radio--input"
                name="size"
              />
              <label htmlFor="large-radio" className="form__radio--label">
                <span className="form__radio--button"></span>
                Yes
              </label>
            </div>
            <div className="form__radio--group">
              <input
                type="radio"
                id="small-radio"
                className="form__radio--input"
                name="size"
              />
              <label htmlFor="small-radio" className="form__radio--label">
                <span className="form__radio--button"></span>
                No
              </label>
            </div>
          </div>
          <div className="select">
            <p>contrat type</p>

            <select name="select" id="select" className="btn btn-primary">
              <option value="">permanet</option>
              <option value="">contart</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Driling"
            className="Contrats__input"
          />
          <label htmlFor="date">Start Date</label>
          <input type="date" id="date" className="Contrats__input" />
          <input type="text" placeholder="Cost" className="Contrats__input" />

          <input
            type="text"
            placeholder="Name -Amount Per diem cost"
            className="Contrats__input"
          />

          <input
            type="text"
            placeholder="Employee list"
            className="Contrats__input"
          />
          <input
            type="text"
            placeholder="Transportation"
            className="Contrats__input"
          />
          <input
            type="text"
            placeholder="Trip Beginging"
            className="Contrats__input"
          />
          <input
            type="text"
            placeholder="Trip Destination"
            className="Contrats__input"
          />
          <input
            type="text"
            placeholder="Maintainance Cost"
            className="Contrats__input"
          />
          <button
            className="Contrats__btn btn btn-lg btn-primary"
            onClick={(e) => Added(e)}
          >
            Add contrat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contrats;
