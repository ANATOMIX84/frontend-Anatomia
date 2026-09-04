import "./SystemCard.css";
import { useNavigate } from "react-router-dom";

interface SystemCardProps {
  imagen: string;
  nombre: string;
  descripcion: string;
  sistema: string;
}

export function SystemCard({
  imagen,
  nombre,
  descripcion,
  sistema,
}: SystemCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trivia/${sistema}`);
  };

  return (
    <article
      className="system-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div className="system-card__image-container">
        <img
          src={imagen}
          alt={nombre}
          className="system-card__image"
        />
      </div>

      <h3 className="system-card__title">
        {nombre}
      </h3>

      <p className="system-card__description">
        {descripcion}
      </p>
    </article>
  );
}
