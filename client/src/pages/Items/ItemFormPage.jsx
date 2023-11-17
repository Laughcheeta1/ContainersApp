import { useForm } from "react-hook-form";
import { useItems } from "../../context/ItemsContext";
import { useNavigate, useParams } from "react-router-dom";
import { itemSchema } from "../../schemas/item";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";

import "../../styles/formPage.css";

export default function ItemFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemSchema),
  });

  const { createItem, errors: itemErrors } = useItems();
  const navigate = useNavigate();
  const params = useParams();
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const onSubmit = async (data) => {
    if (!params.id) {
      await createItem(data);
      setWasSubmitted(true);
    }
  };

  useEffect(() => {
    if (wasSubmitted && itemErrors.length === 0) return navigate("/items");
    setWasSubmitted(false);
  }, [itemErrors, wasSubmitted]);

  return (
    <>
      <div className="container-form">
        {itemErrors.map((error, i) => (
          <div className="container-error" key={i}>
            {error}
          </div>
        ))}

        <h2
          style={{ fontSize: "32px", fontWeight: 600, marginBottom: "2.5rem" }}
        >
          Agregar nuevo ítem.
        </h2>

        <form>
          <div className="group">
            {errors.name?.message ? <p>{errors.name?.message}</p> : null}

            <div className="input-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="ej: Nevera"
                autoFocus
                className="input"
                {...register("name", { required: true })}
              />
            </div>
          </div>

          <div className="group">
            {errors.brand?.message ? <p>{errors.brand?.message}</p> : null}

            <div className="input-group">
              <label htmlFor="brand">Marca:</label>
              <input
                type="text"
                name="brand"
                placeholder="ej: Haceb"
                className="input"
                {...register("brand")}
              />
            </div>
          </div>

          <div className="group">
            {errors.total_quantity?.message ? (
              <p>{errors.total_quantity?.message}</p>
            ) : null}

            <div className="input-group">
              <label htmlFor="type">Total de unidades:</label>
              <input
                name="total_quantity"
                type="number"
                min={0}
                className="input"
                {...register("total_quantity")}
              />
            </div>
          </div>

          <div className="group">
            {errors.available_quantity?.message ? (
              <p>{errors.available_quantity?.message}</p>
            ) : null}

            <div className="input-group">
              <label htmlFor="type">Unidades disponibles:</label>
              <input
                name="available_quantity"
                type="number"
                min={0}
                className="input"
                {...register("available_quantity")}
              />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }} className="container-group">
            <AlertDialogCrear
              buttonMessage="Guardar ítem"
              descriptionMessage="Se guardará un nuevo ítem con la información que ingresaste"
              onSubmit={handleSubmit(onSubmit)}
            />

            <Link
              style={{ width: "100%" }}
              className="btn btn-gris"
              to="/items"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
