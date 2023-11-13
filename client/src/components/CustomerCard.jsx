import { useCustomers } from "../context/CustomerContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function CustomerCard({ customer }) {
  const { deleteCustomer } = useCustomers();

  return (
    <div className="resultado-busqueda">
      <div className="flex gap-x-2 items-center">
        <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
          {customer.name}
        </p>
        <button
          className="btn btn-rojo"
          onClick={() => {
            deleteCustomer(customer._id);
          }}
        >
          Eliminar
        </button>
      </div>
      <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
        {customer.phone}
      </p>
      <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
        {customer.address}
      </p>
      <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
        <span>NIT: </span>
        {customer.company_NIT}
      </p>
      <p className="text-xl font-medium">
        <span>Últ mod: </span>
        {dayjs(customer.updatedAt).utc().format("DD/MM/YY")}
      </p>
    </div>
  );
}
