import { Link } from "react-router-dom";
import { useItems } from "../context/ItemsContext";

export default function ItemCard({ item }) {
  const { deleteItem } = useItems();

  return (
    <div className="resultado-busqueda">
      <header className="flex justify-between">
        <h1 style={{ marginRight: "1rem" }} className="text-xl font-medium">
          {item.name}
          <span style={{ fontWeight: "normal" }}>{item.type}</span>
        </h1>

        <div className="flex gap-x-2 items-center">
          <button
            className="btn btn-rojo"
            onClick={() => {
              deleteItem(item._id);
            }}
          >
            Eliminar
          </button>
          <Link to={`/tasks/${item._id}`} className="btn btn-azul">
            Editar
          </Link>
        </div>
      </header>

      <p className="text-sm">
        <span className="text-lg">Marca:</span> {item.brand}
      </p>

      <p className="text-sm">
        <span className="text-lg">Total:</span> {item.total_quantity}
      </p>

      <p className="text-sm">
        <span className="text-lg">Disponibles:</span> {item.available_quantity}
      </p>
    </div>
  );
}
