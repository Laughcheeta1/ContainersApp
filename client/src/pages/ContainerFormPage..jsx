import { useForm } from "reack-hook-form";
import { useContainers } from "../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ContainerFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createContainer } = useContainers();
  const { navigate } = useNavigate();
  const params = useParamms();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createContainer(data);
      navigate("/contenedores");
      return;
    }
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Numero</label>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("container_id")}
          />

          <label htmlFor="description">Descripción</label>
          <textarea
            rows="3"
            placeholder="Description"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("notes")}
          ></textarea>

          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}
