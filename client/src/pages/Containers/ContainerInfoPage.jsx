import { useEffect, useState } from "react";
import { useContainers } from "../../context/ContainerContext";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import "../../styles/infoPage.css";

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
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
