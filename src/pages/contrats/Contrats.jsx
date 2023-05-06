import { useCollapse } from "react-collapsed";
import "./contrats.scss";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Demo from "../Demo";

const Contrats = () => {
  const Added = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Contrat Added",
      icon: "success",
      timer: 1500,
    });
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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

          <input
            type="date"
            id="date"
            className="Contrats__input"
            placeholder="start Date"
          />
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
          <input
            type="text"
            placeholder="Maintainance Cost"
            className="Contrats__input"
          />
          <button
            className="Contrats__btn btn btn-lg btn-primary"
            onClick={(e) => Added(e)}
          >
            Add contract
          </button>
        </form>
        <h1>View Contracts</h1>
        <div className="gridl">
          <div className="card text-center bg-warning Contrats__card">
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

export default Contrats;
