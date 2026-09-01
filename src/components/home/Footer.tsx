import { NavLink } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__brand">
          <h2>ANATOMIX</h2>
          <p>Aprende anatomía como un profesional.</p>
        </section>

        <section className="footer__links">
          <h3>Enlaces rápidos</h3>

          <div className="footer__links-grid">
            <NavLink to="/home">Inicio</NavLink>
            <NavLink to="/estadisticas">Estadísticas</NavLink>
            <NavLink to="/juego">Juego</NavLink>
            <NavLink to="/modelo-3d">Modelo 3D</NavLink>
            <NavLink to="/competencia">Competencia</NavLink>
            <NavLink to="/creditos">Créditos</NavLink>
          </div>
        </section>

        <section className="footer__social">
          <h3>Síguenos</h3>

          <div className="footer__social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="TikTok">♪</a>
          </div>
        </section>

        <section className="footer__copyright">
          <p>© 2026 ANATOMIX</p>
          <p>Todos los derechos reservados</p>
        </section>
      </div>
    </footer>
  );
}