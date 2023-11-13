import { useForm } from "react-hook-form";
import { useCustomers } from "../../context/CustomerContext";
import { useNavigate } from "react-router-dom";
import { editCustomerSchema } from "../../schemas/editCustomer";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";

import "../../styles/formPage.css";

export default function EditCustomerPage()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(editCustomerSchema)
    });

    const { editCustomer, errors: customerErrors } = useCustomers();
    const navigate = useNavigate();

    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = async (data) => {
        await editCustomer(customer._id, data);
        setWasSubmitted(true);
    };

    useEffect(() => {
        if (wasSubmitted && customerErrors.length === 0)
            return navigate("/customers");
        setWasSubmitted(false);
    }, [customerErrors, wasSubmitted]);

    return (
        <>
            <div className="container-form">
                {customerErrors.map((error, i) => (
                    <div className="container-error" key={i}>
                        {error}
                    </div>
                ))}

                <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
                    Editar Cliente
                </h2>

                <hr style={{ marginTop: ".5rem" }} />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-group">
                        <div className="group">
                            <p>{errors.nameT?.message}</p>

                            <div className="input-group">
                                <label htmlFor="type">Nombre:</label>
                                <input
                                name="name"
                                type="text"
                                className="input"
                                {...register("name")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-group">
                        <div className="group">
                            <p>{errors.phone?.message}</p>

                            <div className="input-group">
                                <label htmlFor="type">Telefono:</label>
                                <input
                                name="phone"
                                type="text"
                                className="input"
                                {...register("phone")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-group">
                        <div className="group">
                            <p>{errors.address?.message}</p>

                            <div className="input-group">
                                <label htmlFor="type">Direccion:</label>
                                <input
                                name="address"
                                type="text"
                                className="input"
                                {...register("address")}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "1rem" }} className="container-group">
                        <AlertDialogCrear
                        buttonMessage="Guardar cambios"
                        descriptionMessage="Se guardaran los cambios que entraste"
                        onSubmit={handleSubmit(onSubmit)}
                        />

                        <Link
                        style={{ width: "100%" }}
                        className="btn btn-gris"
                        to="/customers"
                        >
                        Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}