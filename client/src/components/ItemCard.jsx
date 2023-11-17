import { Link } from "react-router-dom";
import { useItems } from "../context/ItemsContext";
import AlertDialogEliminar from "./AlertDialogEliminar";

export default function ItemCard({ item }) {
  const { deleteItem } = useItems();

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
          {item.name}
          <span style={{ fontWeight: "normal" }}>{item.type}</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AlertDialogEliminar deleteMethod={deleteItem} objectID={item._id} />

          <Link to={`/items/edit/${item._id}`} className="btn btn-azul">
            Editar
          </Link>
        </div>
      </header>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Marca:</span> {item.brand}
      </p>

      <p style={{ marginRight: "1rem", fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Total:</span> {item.total_quantity}
      </p>

      <p style={{ fontSize: "16px" }}>
        <span style={{ fontWeight: "500" }}>Disponibles:</span>{" "}
        {item.available_quantity}
      </p>
    </div>
  );
}
