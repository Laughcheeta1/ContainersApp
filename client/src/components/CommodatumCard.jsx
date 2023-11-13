import { Link } from "react-router-dom";
import { useCommodatums} from "../context/CommodatumContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function CommodatumCard({ commodatum }) {
  const { deleteCommodatum } = useCommodatums();

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
          {" · "}
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
          <button
            className="btn btn-rojo"
            onClick={() => {
              deleteCommodatum(commodatum._id);
            }}
          >
            Eliminar
          </button>
          <Link to={`/tasks/${commodatum._id}`} className="btn btn-azul">
            Editar
          </Link>
        </div>
      </header>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Tamaño:</span> {commodatum.size}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Estado:</span> {commodatum.status}
      </p>

      <p style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Últ Mod:</span>{" "}
        {dayjs(commodatum.updatedAt).utc().format("DD/MM/YY")}
      </p>
    </div>
  );
}
