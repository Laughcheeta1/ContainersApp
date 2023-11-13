import "../styles/principal.css";
import Servicios from "../components/Servicios";
import { useAuth } from "../context/AuthContext";

export default function MenuPage() {
  const { user } = useAuth();

  return (
    <>
      <div className="page-title">
        <h1>Página Principal</h1>
      </div>
      <div className="principal-body">
        <div className="right-container">
          <div className="title-container">
            <h1>Bienvenido&#40;a&#41; <p>{user.username}</p></h1>
            <p style={{ color: "#5c5c5c" }}>
              Por favor seleccione un servicio:
            </p>
          </div>
          <div className="servicios-container">
            <Servicios />
          </div>
        </div>
      </div>
    </>
  );
}
