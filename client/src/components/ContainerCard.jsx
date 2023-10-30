import { Link } from "react-router-dom";
import { useContainers } from "../context/ContainerContext";

export default function ContainerCard({ container }) {
  const { deleteContainer } = useContainers();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{container.container_id}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
            // onClick={() => {
            //   deleteContainer(container._id);
            // }}
          >
            Delete
          </button>
          <Link
            to={`/tasks/${container._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-lg">{container.color}</p>
      <p className="text-lg">{container.size}</p>
      <p className="text-lg">{container.status}</p>
      <p className="text-lg">{container.notes}</p>
      <p className="text-lg">{container.type}</p>
    </div>
  );
}
