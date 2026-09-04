import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { authRepository } from "../../repositories/authRepository";
import type { LoginCredentials } from "../../types/auth";

import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [carnet, setCarnet] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (authRepository.isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const credentials: LoginCredentials = {
      carnet,
      password,
    };

    const user = authRepository.login(credentials);

    if (!user) {
      setError("El carnet o la contraseña son incorrectos.");
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <main className="login-page">
      <section className="login-container">

        <div className="login-card">

          <div className="login-header">
            <div className="login-icon">
              🧠
            </div>

            <h1>ANATOMIX</h1>

            <p>
              Plataforma de estudio de Anatomía
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="carnet">
                Carnet
              </label>

              <input
                id="carnet"
                type="text"
                placeholder="Ingresa tu carnet"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-button"
            >
              Iniciar sesión
            </button>

          </form>

          <div className="login-footer">
            <span>ANATOMIX</span>
            <p>Aprende. Estudia. Domina la Anatomía.</p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default LoginPage;