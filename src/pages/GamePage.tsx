import { useNavigate } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import "./GamePage.css";

const trivias = [
  {
    id: "oseo",
    icono: "🦴",
    titulo: "Sistema Óseo",
    descripcion: "Huesos, articulaciones y estructura corporal.",
  },
  {
    id: "muscular",
    icono: "💪",
    titulo: "Sistema Muscular",
    descripcion: "Músculos, movimiento y fuerza.",
  },
  {
    id: "nervioso",
    icono: "🧠",
    titulo: "Sistema Nervioso",
    descripcion: "Cerebro, sentidos y coordinación.",
  },
  {
    id: "circulatorio",
    icono: "🫀",
    titulo: "Sistema Circulatorio",
    descripcion: "Corazón, sangre y circulación.",
  },
];

function GamePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="game-selection">
        <section className="game-selection__content">
          <p className="game-selection__eyebrow">TRIVIAS DE ANATOMÍA</p>

          <h1>Elige un tema para comenzar</h1>

          <p className="game-selection__description">
            Selecciona una de las cuatro trivias y demuestra lo que sabes.
          </p>

          <div className="game-selection__grid">
            {trivias.map((trivia) => (
              <button
                key={trivia.id}
                type="button"
                className="trivia-topic"
                onClick={() => navigate(`/trivia/${trivia.id}`)}
              >
                <span className="trivia-topic__icon" aria-hidden="true">
                  {trivia.icono}
                </span>

                <h2>{trivia.titulo}</h2>
                <p>{trivia.descripcion}</p>

                <span className="trivia-topic__start">Comenzar →</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GamePage;