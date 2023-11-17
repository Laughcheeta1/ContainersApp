import { useForm } from "react-hook-form";
import { useContainers } from "../../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { containerSchema } from "../../schemas/container";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";

import "../../styles/formPage.css";

export default function ContainerFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(containerSchema),
  });

  const { createContainer, errors: containerErrors } = useContainers();
  const navigate = useNavigate();
  const params = useParams();
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const onSubmit = async (data) => {
    if (!params.id) {
      await createContainer(data);
      setWasSubmitted(true);
    }
  };

  useEffect(() => {
    if (wasSubmitted && containerErrors.length === 0)
      return navigate("/containers");
    setWasSubmitted(false);
  }, [containerErrors, wasSubmitted]);

  return (
    <>
      <div className="container-form">
        {containerErrors.map((error, i) => (
          <div className="container-error" key={i}>
            {error}
          </div>
        ))}

        <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
          Agregar nuevo contenedor.
        </h2>

        <form>
          <div className="container-group">
            <div className="group">
              <p>{errors.container_id?.message}</p>

              <div className="input-group">
                <label htmlFor="container_id">Número:</label>
                <input
                  type="text"
                  name="container_id"
                  placeholder="ej: 123456"
                  autoFocus
                  className="input"
                  {...register("container_id", { required: true })}
                />
              </div>
            </div>

            <div className="group">
              <p>{errors.color?.message}</p>

              <div className="input-group">
                <label htmlFor="color">Color:</label>
                <input
                  type="text"
                  name="color"
                  placeholder="ej: Verde"
                  className="input"
                  {...register("color")}
                />
              </div>
            </div>
          </div>

          <div className="container-group">
            <div className="group">
              <p>{errors.size?.message}</p>

              <div className="input-group">
                <label htmlFor="size">Tamaño:</label>
                <input
                  name="size"
                  type="text"
                  placeholder="ej: Grande"
                  className="input"
                  {...register("size")}
                />
              </div>
            </div>

            <div className="group">
              <p>{errors.qr_code?.message}</p>

              <div className="input-group">
                <label htmlFor="qr_code">Código QR:</label>
                <input
                  name="qr_code"
                  type="text"
                  placeholder="QR"
                  className="input"
                  {...register("qr_code")}
                />
              </div>
            </div>
          </div>

          <div className="group">
            <p>{errors.type?.message}</p>

            <div className="input-group">
              <label htmlFor="type">Tipo:</label>
              <input
                name="type"
                type="text"
                placeholder="ej: Laboratorio"
                className="input"
                {...register("type")}
              />
            </div>
          </div>

          <label
            style={{
              marginBottom: "1rem",
              display: "inline-flex",
              marginTop: "1.5rem",
            }}
            htmlFor="notes"
          >
            Descripción:
          </label>
          <textarea
            name="notes"
            rows="3"
            placeholder="ej: Laboratorio de química para universidad"
            className="input"
            {...register("notes")}
          ></textarea>

          <div style={{ marginTop: "1.5rem" }} className="container-group">
            <AlertDialogCrear
              buttonMessage="Guardar contenedor"
              descriptionMessage="Se creará un nuevo contenedor con la información que ingresaste"
              onSubmit={handleSubmit(onSubmit)}
            />

            <Link
              style={{ width: "100%" }}
              className="btn btn-gris"
              to="/containers"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
