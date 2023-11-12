import { useEffect } from "react";
import { useContainers } from "../context/CustomerContext";
import ContainerCard from "../components/CustomerCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function CustomersPage()
{
    const { getCustomers, customers } = useContainer();

    useEffect(() => {
        getCustomers();
    }, []);
}