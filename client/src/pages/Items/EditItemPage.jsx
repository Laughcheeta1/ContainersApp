import { useForm } from "react-hook-form";
import { useItems } from "../../context/ItemsContext";
import { useNavigate, useParams } from "react-router-dom";
import { itemSchema } from "../../schemas/item";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";
import LoadingScreen from "../../components/LoadingScreen";

import "../../styles/formPage.css";

export default function EditCustomerPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(itemSchema) });
  
    const { updateItem, errors: itemsErrors, getItem } = useItems();
    const navigate = useNavigate();
  
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [item, setItem] = useState(null);
    const params = useParams();
  
    useEffect(() => {
      try {
        const loadItem = async () => {
          const customerInfo = await getItem(params.id);
          setItem(() => customerInfo);
        };
  
        loadItem();
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    const onSubmit = async (data) => {
      await updateItem(params.id, data);
      setWasSubmitted(true);
    };
  
    useEffect(() => {
      if (wasSubmitted && itemsErrors.length === 0)
        return navigate("/items");
      setWasSubmitted(false);
    }, [itemsErrors, wasSubmitted]);
  
    return (
      <>
        {item ? (
          <div className="container-form">
            {itemsErrors.map((error, i) => (
              <div className="container-error" key={i}>
                {error}
              </div>
            ))}
  
            <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
              Editar Item{" "}
              <span style={{ fontSize: "22px", fontWeight: "500" }}>
                Nombre: {item.name}
              </span>
            </h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="container-group">
                <div className="group">
                  <p>{errors.name?.message}</p>
  
                  <div className="input-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                      name="name"
                      type="text"
                      defaultValue={item.name}
                      className="input"
                      {...register("name")}
                    />
                  </div>
                </div>
              </div>
  
              <div className="container-group">
                <div className="group">
                  <p>{errors.brand?.message}</p>
  
                  <div className="input-group">
                    <label htmlFor="brand">Marca:</label>
                    <input
                      name="brand"
                      type="text"
                      defaultValue={item.brand}
                      className="input"
                      {...register("brand")}
                    />
                  </div>
                </div>
              </div>
  
              <div className="container-group">
                <div className="group">
                  <p>{errors.total_quantity?.message}</p>
  
                  <div className="input-group">
                    <label htmlFor="total_quantity">Cantidad Total:</label>
                    <input
                      name="total_quantity"
                      type="text"
                      defaultValue={item.total_quantity}
                      className="input"
                      {...register("total_quantity")}
                    />
                  </div>
                </div>
              </div>

              <div className="container-group">
                <div className="group">
                  <p>{errors.available_quantity?.message}</p>
  
                  <div className="input-group">
                    <label htmlFor="available_quantity">Cantidad Disponible:</label>
                    <input
                      name="available_quantity"
                      type="text"
                      defaultValue={item.available_quantity}
                      className="input"
                      {...register("available_quantity")}
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
                  to="/items"
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
  