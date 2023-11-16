import { useForm } from "react-hook-form";
import { useContainers } from "../../context/ContainerContext";
import { useItems } from "../../context/ItemsContext";
import { useNavigate, useParams } from "react-router-dom";
import { transactionSchema } from "../../schemas/transaction";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";
import LoadingScreen from "../../components/LoadingScreen";

import "../../styles/formPage.css";
import { useCommodatums } from "../../context/CommodatumContext";


/**
 * This is ogint to work the folllowing way:
 *      1- When the page loads up, it is going to get the container specified in the parameters (The container we are making the transaction on)
 *      2- The form is filled up
 *      3- When the form is submited, then we are calling the createCommodatum function
 * @returns The transaction Page
 */

export default function TransactionPage()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(transactionSchema) });

    const { createCommodatum, errors : commodatumErrors } = useCommodatums();
    const { getContainer } = useContainers();
    const navigate = useNavigate();

    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [container, setContainer] = useState(null);
    const params = useParams(); // The parameter is going to be the
        // container Id in wich we are creating the transaction

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
        await createCommodatum(data);
        setWasSubmitted(true);
    };

    useEffect(() => {
        if (wasSubmitted && commodatumErrors.length === 0)
            return navigate(`/containers/${params.id}`);

        setWasSubmitted(false);
    }, [commodatumErrors, wasSubmitted]);


    return(
        <>
            { container ? (
                <div className="container-form">
                {commodatumErrors.map((error, i) => (
                  <div className="container-error" key={i}>
                    {error}
                  </div>
                ))}
      
                <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
                  Crear transaccion{" "}
                  <span style={{ fontSize: "22px", fontWeight: "500" }}>
                    Contenedor : {params.number}
                  </span>
                </h2>
      
                <hr style={{ marginTop: ".5rem" }} />
      
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Quien recibe: </h1>
                    <div style={{ paddingLeft: "5rem" }}>
                        <div className="container-group">
                            <div className="group">
                                <p>{errors.receiver?.id?.message}</p>
                                <div className="input-group" >
                                    <label htmlFor="receiverId">Cedula:</label>
                                    <input
                                    name="receiver.id"
                                    type="text"
                                    id="receiverId"
                                    placeholder="ej: 12345678"
                                    className="input"
                                    {...register("receiver.id")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container-group">
                            <div className="group">
                                <p>{errors.receiver?.name?.message}</p>
                
                                <div className="input-group">
                                    <label htmlFor="receiverName">Nombre:</label>
                                    <input
                                    name="receiver.name"
                                    type="text"
                                    id="receiverName"
                                    placeholder="Ej: Juan Antonio Restrepo Alvarez"
                                    className="input"
                                    {...register("receiver.name")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container-group">
                            <div className="group">
                                <p>{errors.receiver?.number?.message}</p>
                
                                <div className="input-group">
                                    <label htmlFor="receiverNumber">Numero:</label>
                                    <input
                                    name="receiver.number"
                                    type="text"
                                    id="receiverNumber"
                                    placeholder="Ej: +57 589 746 2536"
                                    className="input"
                                    {...register("receiver.number")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr></hr>
                    
                    <h1 style={{marginTop: "2rem"}}>Items</h1>
                    
                    <div style={{ paddingLeft: "5rem" }}>
                        <h2>Make the dynamic list for Items here</h2>
                    </div>


                    <div style={{ marginTop: "3rem" }} className="container-group">
                        <AlertDialogCrear
                        buttonMessage="Confirmar"
                        descriptionMessage="Se creara el comodato correspondiente a esta transaccion"
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
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}