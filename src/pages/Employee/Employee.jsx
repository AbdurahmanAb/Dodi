import Navbar from "../../components/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./dummydata";
import Swal from "sweetalert2";

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
      <div className="container mt-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SSN</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i}>
                <th scope="row">1</th>
                <td>{data.name}</td>
                <td>{data.last}</td>
                <td>
                  <button className="btn btn-primary mx-2" onClick={notify}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={Swalert}>
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
