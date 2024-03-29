import { useCollapse } from "react-collapsed";
import "./contracts.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { DrillingForm } from "./../../components/Forms/DrillingForm";
import { Card } from "reactstrap";
// import { useGetDrillingContractQuery } from "../../store/apiSlice";

const Contracts = () => {
  const Added = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Contract Added",
      icon: "success",
      timer: 1500,
    });
  };
  const [Active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [contract, setContract] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const {
    isLoading,
    isSuccess: isDr,
    data: drData,
  } = useGetDrillingContractQuery();

  const Truking = () => {
    onOpenModal();
    setContract("Trucking");
  };
  const Driling = () => {
    onOpenModal();
    setContract("Driling");
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  useEffect(() => {
    if (isExpanded) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [isExpanded]);

  return (
    <div>
      <Helmet>
        <title>DODI || Contracts</title>
      </Helmet>
      <CardHeader>
        <h1>Contracts</h1>
      </CardHeader>
      <Card className="p-2 text-center mx-auto">
        <h1 className="my-4">Add Contracts</h1>
        {contract === "Driling" && (
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              modal: "customModal",
            }}
          >
            <h2>Drilling Contract</h2>
            <DrillingForm />
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
            className="btn btn-lg btn-info text-white  "
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
      </Card>

      <div className="container mt-5 ">
        <Card className="p-2 text-center">
          <h1>View Contracts</h1>
          <div className="gridl">
            <div className="card text-center bg-warning Contracts__card fit">
              {isDr &&
                drData.map((i) => (
                  <>
                    <div className="card__salry p-4">
                      <h3 className="card__header">Drilling Contract</h3>
                      <p className="text ">{i.site}</p>
                      <div className="btns">
                        <button
                          {...getToggleProps({ onClick: HandleActive })}
                          className="btn  btn-success"
                        >
                          {isExpanded ? "Hide" : "View"}
                        </button>
                        <button
                          className="btn btn-info mx-2"
                          onClick={(e) => HandleActive(e)}
                        >
                          Update
                        </button>
                        <button className="btn btn-danger mx-2 ">Delete</button>
                      </div>
                      <section {...getCollapseProps()}>
                        <ul className="list">
                          <li>
                            contract Recivable :{" "}
                            <span>{i.contractReceivable}</span>
                          </li>
                          <li>Start Date :{i.startDate}</li>
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
                  </>
                ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contracts;
