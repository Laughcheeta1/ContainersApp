import { useEffect } from "react";
import { useContainers } from "../../context/ContainerContext";
import ContainerCard from "../../components/ContainerCard";
import BarraBusqueda from "../../components/BarraBusqueda";
import "../../styles/busqueda.css";

export default function ContainersPage() {
  const { getContainers, containers } = useContainers();

  useEffect(() => {
    getContainers();
  }, []);

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
        Buscar Contenedores
      </h1>

      <BarraBusqueda placeholder="Buscar por número" route="new" />

      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Contenedores.</h2>

        {containers.map((container) => (
          <ContainerCard container={container} key={container._id} />
        ))}
      </div>
    </>
  );
}
