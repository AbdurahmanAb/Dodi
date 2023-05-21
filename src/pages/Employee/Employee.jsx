import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./dummydata";
import Swal from "sweetalert2";
<<<<<<< HEAD

=======
import {
  useDeleteEmployeesMutation,
  useGetEmployeesQuery,
  useAddEmployeesMutation,
} from "../../store/apiSlice";
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
import "./employee.scss";
import {
  Button,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "react-helmet";
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
<<<<<<< HEAD

  const [records, setRecords] = useState(data);
=======
  
  const {
    data: empData = [],
    isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetEmployeesQuery();


  const [records, setRecords] = useState(empData);
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
  const handleChange = (e) => {
    console.log(e.target.value);
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

<<<<<<< HEAD
  // const {
  //   data: empData = [],
  //   isLoading,
  //   isSuccess,
  //   // isError,
  //   // error,
  // } = ();

  const [addEmployee, response] = useState();
  const [deleteEmployee, deleteresponse] = useState();
=======
 

  const [addEmployee, response] = useAddEmployeesMutation();
  const [deleteEmployee, deleteresponse] = useDeleteEmployeesMutation();
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const onSubmit = (data) => {
    console.log(data);
    addEmployee({
      name: data.fullName,
      occupation: data.occupation,
      salary: data.salary,
      type: data.type,
    });
    console.log(response);
    if (response.status === 201) {
      Swal.fire({
        title: "Employee Added",
        icon: "success",
        timer: 1500,
      });
    }
  };
<<<<<<< HEAD
=======
  

>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee

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

  const Swalert = (id) => {
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
<<<<<<< HEAD
        deleteEmployee({ id: id });
        if (deleteresponse.isSuccess) {
          notify();
=======
        deleteEmployee({id:id});
        if(deleteresponse.isSuccess){
        notify();
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
        }
      }
      console.log(result);
    });
  };

  return (
<<<<<<< HEAD
    <div>
      <Helmet>
        <title>DODI || Employee</title>
      </Helmet>
      <CardHeader>
        <h1>Employee</h1>
      </CardHeader>
      <div className="container">
        <Form className="Contracts mb-5" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="mb-3">
            <Label for="fullName">Full Name</Label>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" required />}
            />
            {errors.fullName && (
              <span className="error">Full Name is required</span>
            )}
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="salary">Salary</Label>
            <Controller
              name="salary"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" required />}
            />
            {errors.salary && <span className="error">Salary is required</span>}
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="occupation">Occupation</Label>
            <Controller
              name="occupation"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" required />}
            />
            {errors.occupation && (
              <span className="error">Occupation is required</span>
            )}
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="type">Type</Label>
            <Controller
              name="type"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>
                    {field.value === 0
                      ? "TRUCKING"
                      : field.value === 1
                      ? "DRILLING"
                      : field.value
                      ? field.value
                      : "Select type"}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        field.onChange(0);
                        toggleDropdown();
                      }}
                    >
                      TRUCKING
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        field.onChange(1);
                        toggleDropdown();
                      }}
                    >
                      DRILLING
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
            />
            {errors.type && <span className="error">Type is required</span>}
          </FormGroup>

          <Button
            className="Contracts__btn btn btn-lg btn-primary mt-3"
            type="submit"
          >
            Add Employees
          </Button>
        </Form>
        <div className=" mt-5 tabler">
          <table className="table" style={{ backgroundColor: "#fff" }}>
            <thead className="thead-dark head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Occupation</th>
                <th scope="col">Type</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
=======
    <div className="container">
      <Helmet>
        <title>DODI || Employee</title>
      </Helmet>
      <CardHeader>Employee</CardHeader>
      <Form className="Contracts mb-5" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="mb-3">
          <Label for="fullName">Full Name</Label>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" required />}
          />
          {errors.fullName && (
            <span className="error">Full Name is required</span>
          )}
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="salary">Salary</Label>
          <Controller
            name="salary"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" required />}
          />
          {errors.salary && <span className="error">Salary is required</span>}
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="occupation">Occupation</Label>
          <Controller
            name="occupation"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" required />}
          />
          {errors.occupation && (
            <span className="error">Occupation is required</span>
          )}
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="type">Type</Label>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                  {field.value === 0
                    ? "TRUCKING"
                    : field.value === 1
                    ? "DRILLING"
                    : field.value
                    ? field.value
                    : "Select type"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      field.onChange(0);
                      toggleDropdown();
                    }}
                  >
                    TRUCKING
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      field.onChange(1);
                      toggleDropdown();
                    }}
                  >
                    DRILLING
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          />
          {errors.type && <span className="error">Type is required</span>}
        </FormGroup>

        <Button
          className="Contracts__btn btn btn-lg btn-primary mt-3"
          type="submit"
        >
          Add Employees
        </Button>
      </Form>
      <div className="mt-5 tabler">
        <table className="table" style={{ backgroundColor: "#fff" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Occupation</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              empData.map((data, i) => (
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
                <tr key={i}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.salary}</td>
                  <td>{data.occupation}</td>
<<<<<<< HEAD
                  <td>{data.type}</td>
=======
                  <td>{data.employeeType}</td>
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
                  <td className="btns">
                    <button
                      className="btn btn-primary mx-2 btn1"
                      onClick={notify}
                    >
                      Update
                    </button>
<<<<<<< HEAD
                    <button
                      className="btn btn-danger btn1"
                      onClick={() => Swalert(data.id)}
                    >
=======
                    <button className="btn btn-danger btn1" onClick={()=>Swalert(data.id)}>
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
                      delete
                    </button>
                  </td>
                </tr>
              ))}
<<<<<<< HEAD
            </tbody>
          </table>
        </div>
=======
          </tbody>
        </table>
>>>>>>> 202616860de010fb5775b5d5de068f9ea75857ee
      </div>
      <ToastContainer />
    </div>
  );
};

export default Employee;

// import React, { useState } from "react";
// import DataTable from "react-data-table-component";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Swal from "sweetalert2";
// import {
//   ,
//   ,
//  ,
// } from "../../store/apiSlice";
// import "./employee.scss";
// import {
//   Button,
//   CardHeader,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import { useForm, Controller } from "react-hook-form";
// import { Helmet } from "react-helmet";
// import { FaSearch } from "react-icons/fa";
// const Employee = () => {
//   const columns = [
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Salary",
//       selector: (row) => row.salary,
//       sortable: true,
//     },
//     {
//       name: "Occupation",
//       selector: (row) => row.occupation,
//       sortable: true,
//     },
//     {
//       name: "Type",
//       selector: (row) => row.type,
//     },
//   ];

//   const [records, setRecords] = useState(data);
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     const newData = data.filter((row) => {
//       return row.name.toLowerCase().includes(e.target.value.toLowerCase());
//     });
//     setRecords(newData);
//   };
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const {
//     data: empData = [],
//     isLoading,
//     isSuccess,
//     // isError,
//     // error,
//   } = ();

//   const [addEmployee, response] =();
//   const [deleteEmployee, deleteresponse] = ();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const onSubmit = (data) => {
//     console.log(data);
//     addEmployee({
//       name: data.fullName,
//       occupation: data.occupation,
//       salary: data.salary,
//       type: data.type,
//     });
//     console.log(response);
//     if (response.status === 201) {
//       Swal.fire({
//         title: "Employee Added",
//         icon: "success",
//         timer: 1500,
//       });
//     }
//   };

//   const notify = () => {
//     toast.success("🦄 Employee Updated!", {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const Swalert = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "It will permanently deleted !",
//       type: "warning",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         //Delete From DataBase
//         deleteEmployee({id:id});
//         if(deleteresponse.isSuccess){
//         notify();
//         }
//       }
//       console.log(result);
//     });
//   };

//   return (
//     <div className="container">
//       <Helmet>
//         <title>DODI || Employee</title>
//       </Helmet>
//       <CardHeader>Employee</CardHeader>
//       <Form className="Contracts mb-5" onSubmit={handleSubmit(onSubmit)}>
//         <FormGroup className="mb-3">
//           <Label for="fullName">Full Name</Label>
//           <Controller
//             name="fullName"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => <Input {...field} type="text" required />}
//           />
//           {errors.fullName && (
//             <span className="error">Full Name is required</span>
//           )}
//         </FormGroup>

//         <FormGroup className="mb-3">
//           <Label for="salary">Salary</Label>
//           <Controller
//             name="salary"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => <Input {...field} type="text" required />}
//           />
//           {errors.salary && <span className="error">Salary is required</span>}
//         </FormGroup>

//         <FormGroup className="mb-3">
//           <Label for="occupation">Occupation</Label>
//           <Controller
//             name="occupation"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => <Input {...field} type="text" required />}
//           />
//           {errors.occupation && (
//             <span className="error">Occupation is required</span>
//           )}
//         </FormGroup>

//         <FormGroup className="mb-3">
//           <Label for="type">Type</Label>
//           <Controller
//             name="type"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                 <DropdownToggle caret>
//                   {field.value === 0
//                     ? "TRUCKING"
//                     : field.value === 1
//                     ? "DRILLING"
//                     : field.value
//                     ? field.value
//                     : "Select type"}
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem
//                     onClick={() => {
//                       field.onChange(0);
//                       toggleDropdown();
//                     }}
//                   >
//                     TRUCKING
//                   </DropdownItem>
//                   <DropdownItem
//                     onClick={() => {
//                       field.onChange(1);
//                       toggleDropdown();
//                     }}
//                   >
//                     DRILLING
//                   </DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>
//             )}
//           />
//           {errors.type && <span className="error">Type is required</span>}
//         </FormGroup>

//         <Button
//           className="Contracts__btn btn btn-lg btn-primary mt-3"
//           type="submit"
//         >
//           Add Employees
//         </Button>
//       </Form>
//       <div className="mt-5 tabler">
//         <table className="table" style={{ backgroundColor: "#fff" }}>
//           <thead className="thead-dark">
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Full Name</th>
//               <th scope="col">Salary</th>
//               <th scope="col">Occupation</th>
//               <th scope="col">Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isSuccess &&
//               empData.map((data, i) => (
//                 <tr key={i}>
//                   <th scope="row">{data.id}</th>
//                   <td>{data.name}</td>
//                   <td>{data.salary}</td>
//                   <td>{data.occupation}</td>
//                   <td>{data.type}</td>
//                   <td className="btns">
//                     <button
//                       className="btn btn-primary mx-2 btn1"
//                       onClick={notify}
//                     >
//                       Update
//                     </button>
//                     <button className="btn btn-danger btn1" onClick={()=>Swalert(data.id)}>
//                       delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Employee;
