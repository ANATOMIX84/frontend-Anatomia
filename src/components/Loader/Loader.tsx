import "./Loader.css";

export function Loader() {
  return (
    <main className="loader">
      <section className="loader__content">
        <h1 className="loader__title">ANATOMIX</h1>
        <p className="loader__subtitle">
          Aprende anatomía como un profesional
        </p>

        <div className="loader__spinner" aria-label="Cargando" />

        <p className="loader__text">Cargando ANATOMIX...</p>
      </section>
    </main>
  );
}