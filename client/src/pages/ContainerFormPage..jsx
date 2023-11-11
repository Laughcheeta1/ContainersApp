import { useForm } from "react-hook-form";
import { useContainers } from "../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../styles/containerForm.css";

export default function ContainerFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createContainer, errors: containerErrors } = useContainers();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = async (data) => {
    try {
      if (!params.id) {
        createContainer(data);
        if (errors.length === 0) navigate("/containers");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form">
      {containerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
          {error}
        </div>
      ))}

      <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
        Agregar nuevo contenedor.
      </h2>

      <hr style={{ marginTop: ".5rem" }} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-group">
          <div className="input-group">
            <label htmlFor="container_id">Número:</label>
            <input
              type="text"
              placeholder="ej: 1234"
              autoFocus
              className="input"
              {...register("container_id")}
            />
          </div>

          <div className="input-group">
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              placeholder="ej: Verde"
              className="input"
              {...register("color")}
            />
          </div>
        </div>

        <label htmlFor="size">Tamaño:</label>
        <input
          type="text"
          placeholder="ej: Grande"
          className="input"
          {...register("size")}
        />

        <label htmlFor="qr_code">Codigo QR:</label>
        <input
          type="text"
          placeholder="QR"
          className="input"
          {...register("qr_code")}
        />

        <label htmlFor="type">Tipo:</label>
        <input
          type="text"
          placeholder="ej: Laboratorio"
          className="input"
          {...register("type")}
        />

        <label htmlFor="notes">Descripción:</label>
        <textarea
          rows="3"
          placeholder="Description"
          className="input"
          {...register("notes")}
        ></textarea>

        <button style={{ marginTop: ".8rem" }} className="btn btn-verde">
          Guardar Contenedor
        </button>
      </form>
    </div>
  );
}
