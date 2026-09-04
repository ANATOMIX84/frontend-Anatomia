import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authRepository } from "../../repositories/authRepository";
import "./Navbar.css";

const enlaces = [
  { nombre: "Inicio", ruta: "/home" },
  { nombre: "Juego", ruta: "/juego" },
  { nombre: "Competencia", ruta: "/ranking" },
 
  { nombre: "Modelo 3D", ruta: "/modelo-3d" },
 
  { nombre: "Subir archivos", ruta: "/subir-archivos" },
  { nombre: "Biblioteca", ruta: "/biblioteca" },
];

export function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = authRepository.getCurrentUser();
  const initial = user?.name.charAt(0).toUpperCase() ?? "A";

  const goTo = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleLogout = () => {
    authRepository.logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/home" className="navbar__logo">
          ANATOMIX
        </NavLink>

        <nav className="navbar__links" aria-label="Navegación principal">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {enlace.nombre}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__account">
          <button
            type="button"
            className="navbar__profile"
            aria-label="Abrir perfil"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {initial}
          </button>

          {menuOpen && (
            <div className="navbar__profile-menu">
              {user ? (
                <>
                  <p>Hola, {user.name}</p>
                  <small>{user.carnet}</small>

                  <button type="button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <p>Tu cuenta</p>

                  <button type="button" onClick={() => goTo("/login")}>
                    Iniciar sesión
                  </button>

                  <button type="button" onClick={() => goTo("/registro")}>
                    Crear una cuenta
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}