import { useEffect } from "react";
import { useCustomers } from "../context/CustomerContext";
import CustomerCard from "../components/CustomerCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function CustomersPage()
{
    const { getCustomers, customers } = useCustomers();

    useEffect(() => {
        getCustomers();
    }, []);

    if (customers.length == 0) return <h1>No hay Clientes</h1>;

    return (
        <>
            <h1 className="search-page-title">
                <svg
                style={{ marginRight: "1rem" }}
                width="67px"
                height="67px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                    d="M3 19H21M3 5H21M4 5V19M20 5V19M8 8.5V15.5M16 8.5V15.5M12 8.5V15.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ></path>{" "}
                </g>
                </svg>
                Buscar Cliente
            </h1>

            <BarraBusqueda placeholder="Buscar por NIT" route="new"/>

            <div className="container-resultados">
                <h2 style={{ fontSize: "26px" }}>Clientes</h2>

                <hr
                    style={{
                        marginBottom: ".6rem",
                        height: "1px",
                        border: "none",
                        backgroundColor: "rgba(18, 55, 105, 0.10)",
                    }}
                />

                {customers.map((customer) => (
                    <CustomerCard customer={customer} key={customer._id} />
                ))}
            </div>
        </>
    );
}