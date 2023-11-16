import { Link } from "react-router-dom";
import { useContainers } from "../context/ContainerContext";
import AlertDialogEliminar from "../components/AlertDialogEliminar";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function ContainerCard({ container }) {
  const { deleteContainer } = useContainers();

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
          No: {container.container_id}
          {" · "}
          <span style={{ fontWeight: "normal" }}>{container.type}</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          <AlertDialogEliminar
            deleteMethod={deleteContainer}
            objectID={container._id}
          />

          <Link to={`/containers/${container._id}`} className="btn btn-azul">
            Ver más
          </Link>
        </div>
      </header>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Tamaño:</span> {container.size}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Estado:</span> {container.status}
      </p>

      <p style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Últ Mod:</span>{" "}
        {dayjs(container.updatedAt).utc().format("DD/MM/YY")}
      </p>
    </div>
  );
}
