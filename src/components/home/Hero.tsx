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
      <div className="hero__content">
        <p className="hero__eyebrow">PLATAFORMA EDUCATIVA</p>

        <h1>Bienvenido a ANATOMIX</h1>

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
            Iniciar juego
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

      <div className="hero__image-space">
        <span>Imagen anatómica</span>
        <small>Agrega aquí tu imagen del esqueleto o cuerpo humano</small>
      </div>
    </section>
  );
}