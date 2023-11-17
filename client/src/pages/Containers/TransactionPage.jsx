import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCommodatums } from "../../context/CommodatumContext";
import { useAuth } from "../../context/AuthContext";
import { commodatumSchema } from "../../schemas/commodatum";
import AlertDialogCrear from "../../components/AlertDialogCrear";
import LoadingScreen from "../../components/LoadingScreen";

import "../../styles/formPage.css";

export default function TransactionPage() {
  const { createCommodatum, errors: commodatumErrors } = useCommodatums();
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commodatumSchema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    data.container = params.number;
    data.created_by = user.id;
    await createCommodatum(data);
    setWasSubmitted(true);
  };

  console.log(commodatumErrors);

  useEffect(() => {
    if (wasSubmitted && commodatumErrors.length === 0)
      return navigate(`/containers/${params.id}`);

    setWasSubmitted(false);
  }, [commodatumErrors, wasSubmitted]);

  return (
    <>
      <div className="container-form">
        {commodatumErrors.map((error, i) => (
          <div className="container-error" key={i}>
            {error}
          </div>
        ))}

        <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
          Realizar transacción{" "}
        </h2>

        <span style={{ fontSize: "22px", fontWeight: "500" }}>
          Contenedor No: {params.number}
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Quien recibe:</h2>

          <div className="container-group">
            <div className="group">
              <p>{errors.receiver?.id?.message}</p>

              <div className="input-group">
                <label htmlFor="receiverId">Cédula:</label>
                <input
                  name="receiver.id"
                  type="text"
                  placeholder="ej: 12345678"
                  className="input"
                  {...register("receiver.id")}
                />
              </div>
            </div>

            <div className="group">
              <p>{errors.receiver?.name?.message}</p>

              <div className="input-group">
                <label htmlFor="receiverName">Nombre:</label>
                <input
                  name="receiver.name"
                  type="text"
                  placeholder="Ej: Juan Antonio Restrepo Alvarez"
                  className="input"
                  {...register("receiver.name")}
                />
              </div>
            </div>

            <div className="group">
              <p>{errors.receiver?.number?.message}</p>

              <div className="input-group">
                <label htmlFor="receiverNumber">Teléfono:</label>
                <input
                  name="receiver.number"
                  type="text"
                  placeholder="Ej: +57 589 746 2536"
                  className="input"
                  {...register("receiver.number")}
                />
              </div>
            </div>
          </div>

          <div className="container-group">
            <div className="group">
              <p>{errors.company?.message}</p>

              <div className="input-group">
                <label htmlFor="company">NIT Compañía:</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Ej: Ruta 40"
                  className="input"
                  {...register("company")}
                />
              </div>
            </div>

            <div className="group">
              <p>{errors.duration?.message}</p>

              <div className="input-group">
                <label htmlFor="duration">Duración contrato:</label>
                <input
                  name="duration"
                  type="text"
                  placeholder="Ej: 2 meses y 3 dias"
                  className="input"
                  {...register("duration")}
                />
              </div>
            </div>
          </div>

          <div className="group">
            <p>{errors.action?.message}</p>

            <div className="input-group">
              <label htmlFor="action">Acción:</label>
              <select
                name="action"
                type="text"
                placeholder="Ej: Salida"
                className="input"
                {...register("action")}
              >
                <option value="venta">Venta</option>
                <option value="alquiler">Alquiler</option>
                <option value="entrada">Entrada</option>
              </select>
            </div>
          </div>

          <div className="group">
            <p>{errors.price?.message}</p>

            <div className="input-group">
              <label htmlFor="price">Precio:</label>
              <input
                name="price"
                type="text"
                placeholder="Ej: 13,000,000.00"
                className="input"
                {...register("price")}
              />
            </div>
          </div>

          <div className="group">
            <p>{errors.price?.message}</p>

            <div className="input-group">
              <label htmlFor="transport_price">Precio de transporte:</label>
              <input
                name="transport_price"
                type="text"
                placeholder="Ej: 530,000"
                className="input"
                {...register("transport_price")}
              />
            </div>
          </div>

          <div className="group">
            <p>{errors.price?.message}</p>

            <div className="input-group">
              <label htmlFor="transport_price">Número de comodato:</label>
              <input
                name="commodatum_id"
                type="text"
                placeholder="Ej: 530,000"
                className="input"
                {...register("commodatum_id")}
              />
            </div>
          </div>

          <div className="group">
            <p>{errors.price?.message}</p>

            <div className="input-group">
              <label htmlFor="transport_price">Firma:</label>
              <input
                name="signature"
                type="text"
                placeholder="Ej: 530,000"
                className="input"
                {...register("signature")}
              />
            </div>
          </div>

          <div style={{ marginTop: "2rem" }} className="container-group">
            <AlertDialogCrear
              buttonMessage="Crear comodato"
              descriptionMessage="Se realizara la transaccion deseada"
              onSubmit={handleSubmit(onSubmit)}
            />

            <Link
              style={{ width: "100%" }}
              className="btn btn-gris"
              to={`/containers/${params.id}`}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
