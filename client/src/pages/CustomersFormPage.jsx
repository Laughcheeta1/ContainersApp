import { useForm } from "react-hook-form";
import { useCustomers } from "../context/CustomerContext";
import { useNavigate, useParams } from "react-router-dom";
import { customerSchema } from "../schemas/customer";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

import "../styles/formPage.css";

export default function CustomerFormPage() 
{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(customerSchema),
    });

    const { createCustomer, errors: customerErrors } = useCustomers();
    const navigate = useNavigate();

    const params = useParams();

    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = async (data) => {
        if (!params.id) {
            await createCustomer(data);
            setWasSubmitted(true);
        }
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
                Agregar nuevo cliente
                </h2>
        
                <hr style={{ marginTop: ".5rem" }} />
        
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-group">
                        <div className="group">
                            <p>{errors.company_NIT?.message}</p>
                
                            <div className="input-group">

                                <label htmlFor="type">NIT compañia:</label>
                                <input
                                    name="company_NIT"
                                    type="text"
                                    placeholder="ej: 123456789"
                                    className="input"
                                    {...register("company_NIT")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-group">
                        <div className="group">
                            <p>{errors.name?.message}</p>
                
                            <div className="input-group">

                                <label htmlFor="type">Nombre compañia:</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="ej: Fundacion de madres solteras sede palmas"
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
                                    placeholder="ej: +57 304 213 4519"
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
                                    placeholder="ej: Cl. 19a #27231 a 27-259"
                                    className="input"
                                    {...register("name")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-group">
                        <div className="group">
                            <p>{errors.created_by?.message}</p>
                
                            <div className="input-group">

                                <label htmlFor="type">Creador:</label>
                                <input
                                    name="created_by"
                                    type="text"
                                    placeholder="ej: Daniela ;)"
                                    className="input"
                                    {...register("created_by")}
                                />
                            </div>
                        </div>
                    </div>

        
                    <div style={{ marginTop: "1rem" }} className="container-group">
                        <button
                        style={{ width: "100%" }}
                        className="btn btn-verde"
                        type="submit"
                        >
                            Guardar cliente
                        </button>

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
      );
};