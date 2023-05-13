import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
import "./employee.scss";
import { Helmet } from "react-helmet";
import { Input } from "reactstrap";
import { FaSearch } from "react-icons/fa";
const Employee = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true,
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
  ];
  const data = [
    {
      ssn: "245798",
      name: "abdu Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
    {
      ssn: "245798",
      name: "abdu Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
    {
      ssn: "245798",
      name: "Yup  Jho Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
    {
      ssn: "245798",
      name: "abdu Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
    {
      ssn: "245798",
      name: "abdu Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
    {
      ssn: "245798",
      name: "Yup  Jho Jhon",
      salary: "$45,000",
      occupation: "FrontEnd Developer",
      type: "Contractual",
    },
    {
      ssn: "955798",
      name: "Jane Just",
      salary: "$15,000",
      occupation: "Accountant",
      type: "Permanent",
    },
    {
      ssn: "2005798",
      name: "Hary Wilson",
      salary: "$65,000",
      occupation: "DevOps Engineer",
      type: "FreeLance",
    },
  ];
  const [records, setRecords] = useState(data);
  const handleChange = (e) => {
    console.log(e.target.value);
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  };
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
  const Added = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Employee Added",
      icon: "success",
      timer: 1500,
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
    <>
      <div className="container ">
        <Helmet>
          <title>DODI || Employee</title>
        </Helmet>

        <h2 className="mb-3">Employee</h2>

        <form className="Contracts mb-5">
          <input
            type="text"
            placeholder="First Name"
            className="Contracts__input"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="Contracts__input"
          />

          <input
            type="text"
            placeholder="Salary"
            className="Contracts__input"
          />

          <input
            type="text"
            placeholder="Occupation"
            className="Contracts__input"
          />
          <input type="text" placeholder="Type" className="Contracts__input" />

          <button
            className="Contracts__btn btn btn-lg btn-primary"
            onClick={(e) => Added(e)}
          >
            Add Employees
          </button>
        </form>

        <ToastContainer />
      </div>
      <div className="container mt-5">
        <div className="employee__search ">
          <input
            type="text"
            placeholder="Search Employee"
            className="Contracts__input m-3"
            onChange={handleChange}
          />

          {/* <span>           <FaSearch />
        </span> */}
        </div>
        <DataTable
          columns={columns}
          data={records}
          fixedHeader
          pagination
          selectableRows
        ></DataTable>
      </div>
    </>
  );
};

export default Employee;
