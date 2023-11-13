import { useEffect } from "react";
import { useCommodatums } from "../context/CommodatumContext";
import CommodatumCard from "../components/CommodatumCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function CommodatumPage() {
  const { getCommodatums, commodatums } = useCommodatums();

  console.log(commodatums);

  useEffect(() => {
    getCommodatums();
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
        Buscar Comodatos
      </h1>

      <BarraBusqueda placeholder="Buscar por número" route="new" />

      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Comodatos</h2>

        <hr
          style={{
            marginBottom: ".6rem",
            height: "1px",
            border: "none",
            backgroundColor: "rgba(18, 55, 105, 0.10)",
          }}
        />
        {commodatums.map((commodatum) => (
          <CommodatumCard commodatum={commodatum} key={commodatum._id} />
        ))}
      </div>
    </>
  );
}