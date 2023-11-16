import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContainers } from "../../context/ContainerContext";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import "../../styles/infoPage.css";
import containerDummy from "../../assets/containerDummy.png";

export default function ContainerInfoPage() {
  const params = useParams();
  const { getContainer } = useContainers();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    try {
      const loadContainer = async () => {
        const containerInfo = await getContainer(params.id);
        console.log(containerInfo);
        setContainer(() => containerInfo);
      };

      loadContainer();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {container ? (
        <>
          <div className="title">
            Contenedor no.{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "400",
                marginInline: "1rem",
              }}
            >
              {container.container_id}
            </span>
            {" · "}
            {container.type}
          </div>

          <div className="container-info">
            <h1 className="container-title-info">Información.</h1>
            <div className="info">
              <div style={{ display: "flex", flexDirection: "column" }}>
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
              </div>

              <div className="info-column">
                <div className="details container">
                  <div className="info-row">
                    <p className="text">
                      Color: <span>{container.color}</span>
                    </p>

                    <p className="text">
                      Tipo: <span>{container.type}</span>
                    </p>

                    <p className="text">
                      Tamaño: <span>{container.size}</span>
                    </p>

                    <p className="text">
                      Estado: <span>{container.status}</span>
                    </p>
                  </div>
                </div>

                <div className="container">
                  <div className="info-row">
                    <p className="text">
                      Notas: <span>{container.notes}</span>
                    </p>
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

            <h1 className="subtitle">Mantenimientos</h1>
          </div>

          <Link to={`/transaction/${container._id}/${container.container_id}`} className="btn btn-azul">
            Hacer Transaccion
          </Link>
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
