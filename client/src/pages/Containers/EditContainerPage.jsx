import { useForm } from "react-hook-form";
import { useContainers } from "../../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { editContainerSchema } from "../../schemas/editContainer";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";
import LoadingScreen from "../../components/LoadingScreen";

import "../../styles/formPage.css";

export default function EditContainerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(editContainerSchema) });

  const { updateContainer, errors: containerErrors, getContainer } = useContainers();
  const navigate = useNavigate();

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [container, setContainer] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      const loadContainer = async () => {
        const containerInfo = await getContainer(params.id);
        setContainer(() => containerInfo);
      };

      loadContainer();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSubmit = async (data) => {
    await updateContainer(params.id, data);
    setWasSubmitted(true);
  };

  useEffect(() => {
    if (wasSubmitted && containerErrors.length === 0)
      return navigate("/containers");
    setWasSubmitted(false);
  }, [containerErrors, wasSubmitted]);

  return (
    <>
      {container ? (
        <div className="container-form">
          {containerErrors.map((error, i) => (
            <div className="container-error" key={i}>
              {error}
            </div>
          ))}

          <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
            Editar Container{" "}editContainerSchema
            <span style={{ fontSize: "22px", fontWeight: "500" }}>
              Numero: {container.container_id}
            </span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-group">
              <div className="group">
                <p>{errors.color?.message}</p>

                <div className="input-group">
                  <label htmlFor="color">Color:</label>
                  <input
                    name="color"
                    type="text"
                    defaultValue={container.color}
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
                    defaultValue={container.size}
                    className="input"
                    {...register("size")}
                  />
                </div>
              </div>
            </div>

            <div className="container-group">
              <div className="group">
                <p>{errors.type?.message}</p>

                <div className="input-group">
                  <label htmlFor="type">Tipo:</label>
                  <input
                    name="type"
                    type="text"
                    defaultValue={container.type}
                    className="input"
                    {...register("type")}
                  />
                </div>
              </div>
            </div>

            <div className="container-group">
              <div className="group">
                <p>{errors.notes?.message}</p>

                <div className="input-group">
                  <label htmlFor="notes">Notas:</label>
                  <input
                    name="notes"
                    type="text"
                    defaultValue={container.notes}
                    className="input"
                    {...register("notes")}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }} className="container-group">
              <AlertDialogCrear
                buttonMessage="Guardar cambios"
                descriptionMessage="Se guardaran los cambios que entraste"
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
