import { useEffect, useState } from "react";
import { useCommodatums } from "../../context/CommodatumContext";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import "../../styles/infoPage.css";
import containerDummy from "../../assets/containerDummy.png";

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
            Comodato no.{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "400",
                marginInline: "1rem",
              }}
            >
              {commodatum.comodatum_id}
            </span>
            {" · "}
            {commodatum.action}
          </div>

          <div className="container-info">
            <h1 className="container-title-info">Información General</h1>
            <div className="info">
              {/*<div style={{ display: "flex", flexDirection: "column" }}>
                <div className="container">
                   <label
                    style={{
                      fontSize: "20px",
                      marginBottom: "1rem",
                      fontWeight: "500",
                    }}
                    htmlFor="image"
                  >
                    Foto contenedor.
                  </label>
                  <img
                    name="image"
                    style={{
                      height: "12rem",
                      width: "auto",
                      objectFit: "cover",
                    }}
                    src={containerDummy}
                    alt=""
                  />
                </div>
              </div>*/}

              <div className="info-column">
                <div className="details container">
                  <div className="info-row">
                    <p className="text">
                    {" · "}Persona que recibe: <span>{commodatum.reciever}</span>
                    </p>

                    <p className="text">
                    {" · "}Contenedor: <span>{commodatum.container}</span>
                    </p>

                    <p className="text">
                    {" · "}Compañía: <span>{commodatum.company}</span>
                    </p>

                    <p className="text">
                    {" · "}Fecha de creación: <span>{commodatum.date}</span>
                    </p>

                    <p className="text">
                    {" · "}Duración de contrato: <span>{commodatum.duration}</span>
                    </p>

                    <p className="text">
                    {" · "}Precio: <span>{commodatum.price}</span>
                    </p>

                    <p className="text">
                    {" · "}Precio de transporte: <span>{commodatum.transport_price}</span>
                    </p>

                  </div>
                </div>

                {/*<div className="container">
                  <div className="info-row">
                    <p className="text">
                      Notas: <span>{container.notes}</span>
                    </p>
                  </div>
               </div>*/}
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
