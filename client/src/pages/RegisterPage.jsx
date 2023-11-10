import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="auth-container">
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <form style={{ width: "100%" }} onSubmit={onSubmit}>
        <div className="auth-title">
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Crea tu cuenta.
          </h1>
          <p style={{ fontSize: "14px" }}>
            Crea tu cuenta para acceder a{" "}
            <span style={{ fontWeight: "600" }}>Espacios Móviles S.A.S.</span>
          </p>
        </div>

        {errors.username && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "red",
              marginBottom: ".5rem",
            }}
          >
            Username is required
          </p>
        )}

        <input
          type="text"
          {...register("username", { required: true })}
          className="auth-input"
          placeholder="Nombre de usuario"
        />

        {errors.email && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "red",
              marginBottom: ".5rem",
            }}
          >
            Email is required
          </p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          className="auth-input"
          placeholder="Correo electrónico"
        />

        {errors.password && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "red",
              marginBottom: ".5rem",
            }}
          >
            Password is required
          </p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="auth-input"
          placeholder="Contraseña"
        />

        <button
          style={{ width: "100%" }}
          className="btn btn-verde"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
