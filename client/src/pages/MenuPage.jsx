import "../styles/principal.css";
import Servicios from "../components/Servicios";

export default function MenuPage() {
  return (
    <>
      <div className="page-title">
        <h1>Página Principal</h1>
      </div>
      <div className="principal-body">
        <div className="right-container">
          <div className="title-container">
            <h1>Bienvenido&#40;a&#41;</h1>
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
