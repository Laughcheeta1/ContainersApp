import { Link } from "react-router-dom";
import { useContainers } from "../context/ContainerContext";

export default function ContainerCard({ container }) {
  const { deleteContainer } = useContainers();

  return (
    <div className="resultado-busqueda">
      <header className="flex justify-between">
        <h1 style={{ marginRight: "1rem" }} className="text-2xl font-medium">
          Número: {container.container_id}
        </h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="btn btn-rojo"
            onClick={() => {
              deleteContainer(container._id);
            }}
          >
            Delete
          </button>
          <Link to={`/tasks/${container._id}`} className="btn btn-azul">
            Edit
          </Link>
        </div>
      </header>
      <p className="text-sm">
        <span className="text-lg">Color: </span>
        {container.color}
      </p>
      <p className="text-sm">
        <span className="text-lg">Tamaño:</span> {container.size}
      </p>
      <p className="text-sm">
        <span className="text-lg">Estado:</span> {container.status}
      </p>
      <p className="text-sm">
        <span className="text-lg">Tipo:</span> {container.type}
      </p>
    </div>
  );
}
