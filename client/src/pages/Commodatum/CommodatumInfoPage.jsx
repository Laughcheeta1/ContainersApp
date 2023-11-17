import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCommodatums } from "../../context/CommodatumContext";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import "../../styles/infoPage.css";
import containerDummy from "../../assets/containerDummy.png";
import "../Commodatum/commodatumInfoPage.css";

export default function CommodatumInfoPage() {
  const params = useParams();
  const { getCommodatum } = useCommodatums();
  const [commodatum, setCommodatum] = useState(null);

  useEffect(() => {
    try {
      const loadCommodatum = async () => {
        const commodatumInfo = await getCommodatum(params.id);
        console.log(commodatumInfo);
        setCommodatum(() => commodatumInfo);
      };

      loadCommodatum();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {commodatum ? (
        <>
          <div className="title">
            Comodato no.{"  "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "400",
                marginInline: "1rem",
              }}
            >
              {commodatum.commodatum_id}
            </span>
            {commodatum.action}
          </div>

          <div className="container-info">
            <h1 className="container-title-info">
              Información general
              <Link to={"/commodatums"} className="btn btn-azul">
                Volver
              </Link>
            </h1>

            <div className="info">
              <div className="info-column">
                <div className="details container">
                  <div className="two-columns-container">
                    <div className="column">
                      <p className="text">
                        Persona que recibe:{" "}
                        <span>{commodatum.receiver.name}</span>
                      </p>

                      <p className="text">
                        ID de la persona que recibe:{" "}
                        <span>{commodatum.receiver.id}</span>
                      </p>

                      <p className="text">
                        Telefono de la persona que recibe:{" "}
                        <span>{commodatum.receiver.number}</span>
                      </p>

                      <p className="text">
                        Contenedor:{" "}
                        <span>{commodatum.container.container_id}</span>
                      </p>

                      <p className="text">
                        Compañía: <span>{commodatum.company}</span>
                      </p>
                    </div>

                    <div className="column">
                      <p className="text">
                        Fecha de creación: <span>{commodatum.date}</span>
                      </p>

                      <p className="text">
                        Duración de contrato: <span>{commodatum.duration}</span>
                      </p>

                      <p className="text">
                        Precio: <span>{commodatum.price}</span>
                      </p>

                      <p className="text">
                        Precio de transporte:{" "}
                        <span>{commodatum.transport_price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr
              style={{
                border: "solid .5px #B5B2BC",
                marginBottom: "1.5rem",
                marginInline: "1.5  rem",
              }}
            />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
