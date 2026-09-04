import "./Hero.css";

interface HeroProps {
  user: {
    name: string;
    carnet: string;
    role: string;
  } | null;
  onStartGame: () => void;
  onLogout: () => void;
}

export function Hero({ user, onStartGame, onLogout }: HeroProps) {
  return (
    <section className="hero">
      {/* Fondo decorativo */}
      <div className="hero__glow hero__glow--purple"></div>
      <div className="hero__glow hero__glow--blue"></div>

      {/* Contenido izquierdo */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          PLATAFORMA EDUCATIVA
        </p>

        <h1>
          Bienvenido a
          <span> ANATOMIX</span>
        </h1>

        <p className="hero__description">
          ¡Aprende anatomía como un profesional!
        </p>

        {user && (
          <div className="hero__user-info">
            <span>Hola, {user.name}</span>
            <span>Carnet: {user.carnet}</span>
          </div>
        )}

        <div className="hero__actions">
          <button
            type="button"
            className="hero__button"
            onClick={onStartGame}
          >
            Iniciar Juego
          </button>

          {user && (
            <button
              type="button"
              className="hero__logout"
              onClick={onLogout}
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>

      {/* Imagen anatómica */}
      <div className="hero__image-space">
        <div className="hero__hexagons"></div>

        <img
          src="/models/esqueleto.png"
          alt="Modelo anatómico del cuerpo humano"
          className="hero__image"
        />
      </div>
    </section>
  );
}