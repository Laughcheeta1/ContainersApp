import { useForm } from "react-hook-form";
import { useContainers } from "../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ContainerFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createContainer } = useContainers();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = async (data) => {
    try {
      if (!params.id) {
        createContainer(data);
        navigate("/containers");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="container_id">Numero</label>
          <input
            type="text"
            placeholder="ej: 1234"
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("container_id")}
          />

          <label htmlFor="color">Color</label>
          <input
            type="text"
            placeholder="ej: Verde"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("color")}
          />

          <label htmlFor="size">Tamaño</label>
          <input
            type="text"
            placeholder="ej: Grande"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("size")}
          />

          <label htmlFor="qr_code">Codigo QR</label>
          <input
            type="text"
            placeholder="QR"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("qr_code")}
          />

          <label htmlFor="type">Tipo</label>
          <input
            type="text"
            placeholder="ej: Laboratorio"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("type")}
          />

          <label htmlFor="notes">Descripción</label>
          <textarea
            rows="3"
            placeholder="Description"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("notes")}
          ></textarea>

          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}
