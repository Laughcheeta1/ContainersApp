import { Link } from "react-router-dom";
import useContainer from "../context/ContainerContext";

export default function ContainerCard({ container }) {
  const { deleteContainer } = useContainer();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{container.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
            onClick={() => {
              deleteContainer(container._id);
            }}
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
      <p className="text-slate-300">{container.description}</p>
    </div>
  );
}
