import { NavLink } from "react-router-dom";
import "./Navbar.css";

const enlaces = [
  { nombre: "Inicio", ruta: "/home" },
  { nombre: "Juego", ruta: "/juego" },
  { nombre: "Competencia", ruta: "/competencia" },
  { nombre: "Estadísticas", ruta: "/estadisticas" },
  { nombre: "Modelo 3D", ruta: "/modelo-3d" },
  { nombre: "Créditos", ruta: "/creditos" },
];

export function Navbar() {
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

        <button
          type="button"
          className="navbar__profile"
          aria-label="Abrir perfil"
        >
          A
        </button>
      </div>
    </header>
  );
}