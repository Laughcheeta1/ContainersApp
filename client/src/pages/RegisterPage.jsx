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
    if (isAuthenticated) navigate("/register");
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
      <form onSubmit={onSubmit}>
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
        <input
          type="text"
          {...register("username", { required: true })}
          className="auth-input"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
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
