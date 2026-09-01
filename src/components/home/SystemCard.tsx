import "./SystemCard.css";

interface SystemCardProps {
  icono: string;
  nombre: string;
  descripcion: string;
}

export function SystemCard({
  icono,
  nombre,
  descripcion,
}: SystemCardProps) {
  return (
    <article className="system-card">
      <span className="system-card__icon" aria-hidden="true">
        {icono}
      </span>

      <h3 className="system-card__title">{nombre}</h3>

      <p className="system-card__description">{descripcion}</p>
    </article>
  );
}