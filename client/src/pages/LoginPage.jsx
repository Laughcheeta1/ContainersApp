import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/auth.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  return (
    <div className="auth-container">
      {signinErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <div className="auth-title">
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "600",
              marginBottom: ".6rem",
            }}
          >
            Bienvenido de nuevo.
          </h1>
          <p style={{ fontSize: "14px" }}>
            Aquí podras consultar toda la información de{" "}
            <span style={{ fontWeight: "600" }}>Espacios Móviles S.A.S.</span>
          </p>
        </div>

        <input
          type="email"
          {...register("email", { required: true })}
          className="auth-input"
          placeholder="Email"
        />

        {errors.email && <p className="text-red-500">Email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="auth-input"
          placeholder="Password"
        />

        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button
          style={{ width: "100%" }}
          type="submit"
          className="btn btn-azul"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
