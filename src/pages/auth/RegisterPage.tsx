import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { authRepository } from "../../repositories/authRepository";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [carnet, setCarnet] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (authRepository.isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const user = authRepository.register({
      name,
      carnet,
      password,
    });

    if (!user) {
      setError("Ya existe una cuenta registrada con ese carnet.");
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <main className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <p>ANATOMIX</p>
        <h1>Crear una cuenta</h1>

        <label htmlFor="name">Nombre completo</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="carnet">Carnet de identidad</label>
        <input
          id="carnet"
          value={carnet}
          onChange={(event) => setCarnet(event.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        {error && <p className="register-form__error">{error}</p>}

        <button type="submit">Crear cuenta</button>

        <button
          type="button"
          className="register-form__login"
          onClick={() => navigate("/login")}
        >
          Ya tengo una cuenta
        </button>
      </form>
    </main>
  );
}

export default RegisterPage;