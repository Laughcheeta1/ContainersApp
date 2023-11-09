import { useEffect } from "react";
import { useContainers } from "../context/ContainerContext";
import ContainerCard from "../components/ContainerCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function ContainersPage() {
  const { getContainers, containers } = useContainers();

  useEffect(() => {
    getContainers();
  }, []);

  if (containers.length === 0) return <h1>No Hay Contenedores</h1>;

  return (
    <>
      <h1 className="search-page-title">Buscar Contenedores</h1>
      <BarraBusqueda />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {containers.map((container) => (
          <ContainerCard container={container} key={container._id} />
        ))}
      </div>
    </>
  );
}
