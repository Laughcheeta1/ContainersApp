import { Link } from "react-router-dom";
import { useCustomers } from "../context/CustomerContext";
import AlertDialogEliminar from "./AlertDialogEliminar";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function CustomerCard({ customer }) {
  const { deleteCustomer } = useCustomers();

  return (
    <div className="resultado-busqueda">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginRight: "1rem",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          {customer.name}
        </p>

        <AlertDialogEliminar
          deleteMethod={deleteCustomer}
          objectID={customer._id}
        />

        <Link to={{pathname: "/customers/edit", state: customer}} className="btn btn-azul">
          Editar
        </Link>
      </div>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Tel: </span>
        {customer.phone}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        {customer.address}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>NIT: </span>
        {customer.company_NIT}
      </p>

      <p style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Últ mod: </span>
        {dayjs(customer.updatedAt).utc().format("DD/MM/YY")}
      </p>
    </div>
  );
}
