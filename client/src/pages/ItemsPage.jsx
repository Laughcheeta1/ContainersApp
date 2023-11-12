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
      <h1 className="search-page-title">Buscar Ítems</h1>

      <BarraBusqueda placeholder="Buscar por nombre" route="new" />

      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Ítems.</h2>

        <hr
          style={{
            marginBottom: ".6rem",
            height: "1px",
            border: "none",
            backgroundColor: "rgba(18, 55, 105, 0.10)",
          }}
        />

        {containers.map((container) => (
          <ContainerCard container={container} key={container._id} />
        ))}
      </div>
    </>
  );
}
