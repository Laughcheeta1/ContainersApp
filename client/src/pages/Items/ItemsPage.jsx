import { useEffect } from "react";
import { useItems } from "../../context/ItemsContext";
import ItemCard from "../../components/ItemCard";
import BarraBusqueda from "../../components/BarraBusqueda";
import "../../styles/busqueda.css";

export default function ItemsPage() {
  const { getItems, items } = useItems();

  useEffect(() => {
    getItems();
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
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
              x="5"
              y="4"
              width="8"
              height="8"
              rx="1.8"
              stroke="#33363F"
              strokeWidth="2"
            ></rect>{" "}
            <path
              d="M4 13.8C4 12.8059 4.80589 12 5.8 12H10.2C11.1941 12 12 12.8059 12 13.8V20H5.8C4.80589 20 4 19.1941 4 18.2V13.8Z"
              stroke="#33363F"
              strokeWidth="2"
            ></path>{" "}
            <path
              d="M12 13.8C12 12.8059 12.8059 12 13.8 12H18.2C19.1941 12 20 12.8059 20 13.8V18.2C20 19.1941 19.1941 20 18.2 20H12V13.8Z"
              stroke="#33363F"
              strokeWidth="2"
            ></path>{" "}
            <path
              d="M16 12V15"
              stroke="#33363F"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M8 12V15"
              stroke="#33363F"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M9 4V7"
              stroke="#33363F"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
        Buscar Ítems
      </h1>
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

        {items.map((items) => (
          <ItemCard item={items} key={items._id} />
        ))}
      </div>
    </>
  );
}
