import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import "../../styles/auth.css";

function RegisterPage() {
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (value) => {
    await signUp(value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  return (
    <div className="body">
      <div className="auth-container">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}

        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
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

          <label className="input-label" htmlFor="username">
            Nombre de usuario:
            {errors.username?.message && (
              <p className="input-errors">{errors.username?.message}</p>
            )}
          </label>

          <input
            type="text"
            name="username"
            {...register("username")}
            className="auth-input"
            placeholder="Nombre de usuario"
          />

          <label className="input-label" htmlFor="email">
            Correo:
            {errors.email?.message && (
              <p className="input-errors">{errors.email?.message}</p>
            )}
          </label>

          <input
            type="email"
            name="email"
            {...register("email")}
            className="auth-input"
            placeholder="Correo electrónico"
          />

          <label className="input-label" htmlFor="password">
            Contraseña:
            {errors.password?.message && (
              <p className="input-errors">{errors.password?.message}</p>
            )}
          </label>

          <input
            type="password"
            name="password"
            {...register("password")}
            className="auth-input"
            placeholder="Contraseña"
          />

          <label className="input-label" htmlFor="confirmPassword">
            Confirmar contraseña:
            {errors.confirmPassword?.message && (
              <p className="input-errors">{errors.confirmPassword?.message}</p>
            )}
          </label>

          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
            className="auth-input"
            placeholder="Confirmar contraseña"
          />

          <button
            style={{ width: "100%", marginTop: "1rem", padding: "0" }}
            className="btn btn-verde"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
