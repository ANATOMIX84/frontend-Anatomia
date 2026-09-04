import "./SystemCard.css";

interface SystemCardProps {
  imagen: string;
  nombre: string;
  descripcion: string;
}

export function SystemCard({
  imagen,
  nombre,
  descripcion,
}: SystemCardProps) {
  return (
    <article className="system-card">
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