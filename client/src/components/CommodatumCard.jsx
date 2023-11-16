import { Link } from "react-router-dom";
import { useCommodatums } from "../context/CommodatumContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function CommodatumCard({ commodatum }) {

  return (
    <div className="resultado-busqueda">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".4rem",
          alignItems: "center",
        }}
      >
        <h1
          style={{ marginRight: "1rem", fontSize: "18px", fontWeight: "500" }}
        >
          No: {commodatum.commodatum_id}
          <span style={{ fontWeight: "normal" }}>{commodatum.type}</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          <Link to={`/commodatums/${commodatum._id}`} className="btn btn-azul">
            Mas informacion
          </Link>
        </div>
      </header>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>No. Contenedor: </span>{" "}
        {commodatum.container.container_id}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Fecha: </span>{" "}
        {dayjs(commodatum.date).utc().format("DD/MM/YY")}
      </p>

      <p style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Últ Mod:</span>{" "}
        {dayjs(commodatum.updatedAt).utc().format("DD/MM/YY")}
      </p>
    </div>
  );
}
