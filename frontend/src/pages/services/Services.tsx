import { useState } from "react";
import "./services.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { services } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    type: "string",
    headerName: "Serviço",
    width: 350,
  },
  {
    field: "color",
    type: "string",
    headerName: "Descrição",
    width: 350,
  },
  {
    field: "price",
    type: "string",
    headerName: "Preço",
    width: 200,
  },
  
  
];

const Services = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="service">
      <div className="info">
        <h1>Serviços</h1>
        <button onClick={() => setOpen(true)}>Add Novo Serviço</button>
      </div>
      <DataTable slug="service" columns={columns} rows={services} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="serviço" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Services;
