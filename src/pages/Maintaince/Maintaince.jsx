import DataTable from "react-data-table-component";
import { CardHeader } from "reactstrap";
const git = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "CreatedDate",
      selector: (row) => row.CreatedDate,
    },
    {
      name: "Type",
      selector: (row) => row.Type,
    },
    {
      name: "PlateNumber",
      selector: (row) => row.PlateNumber,
    },
    {
      name: "Amount",
      selector: (row) => row.id,
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Toyota",
      CreatedDate: "20/05/2023",
      Type: "4",
      PlateNumber: "52655",
      Amount: "1000000",
    },
    {
      id: 1,
      name: "Toyota",
      CreatedDate: "20/05/2023",
      Type: "4",
      PlateNumber: "52655",
      Amount: "1000000",
    },
    {
      id: 1,
      name: "Toyota",
      CreatedDate: "20/05/2023",
      Type: "4",
      PlateNumber: "52655",
      Amount: "1000000",
    },
    {
      id: 1,
      name: "Toyota",
      CreatedDate: "20/05/2023",
      Type: "4",
      PlateNumber: "52655",
      Amount: "1000000",
    },
    {
      id: 1,
      name: "Toyota",
      CreatedDate: "20/05/2023",
      Type: "4",
      PlateNumber: "52655",
      Amount: "1000000",
    },
  ];
  return (
    <div className="">
      <CardHeader>
        <h1> Maintenance</h1>
      </CardHeader>

      <div className="container mt-5">
        <DataTable columns={columns} data={rows} />
      </div>
    </div>
  );
};

export default git;
