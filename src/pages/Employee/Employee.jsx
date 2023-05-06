import Navbar from "../../components/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./dummydata";
import Swal from "sweetalert2";
import "./employee.scss";

const Employee = () => {
  const notify = () => {
    toast.success("🦄 Employee Updated!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const Swalert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "It will permanently deleted !",
      type: "warning",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete From DataBase

        notify();
      }
      console.log(result);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 tabler">
        <table className="table" style={{ backgroundColor: "#fff" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Occupation</th>
              <th scope="col">Type</th>
              <th scope="col"> Handle</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i}>
                <th scope="row">{data.ssn}</th>
                <td>{data.name}</td>
                <td>{data.last}</td>
                <td>{data.salary}</td>
                <td>{data.occupation}</td>
                <td>{data.type}</td>
                <td className="btns">
                  <button
                    className="btn btn-primary mx-2 btn1"
                    onClick={notify}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger btn1" onClick={Swalert}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Employee;
