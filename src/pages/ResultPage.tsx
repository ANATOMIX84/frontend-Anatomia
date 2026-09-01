import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import "./ResultPage.css";

interface ResultState {
  score?: number;
  total?: number;
}

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state as ResultState | null;
  const score = result?.score ?? 0;
  const total = result?.total ?? 0;

  return (
    <>
      <Navbar />

      <main className="result-page">
        <section className="result-card">
          <span className="result-card__trophy" aria-hidden="true">
            🏆
          </span>

          <h1>¡Felicidades!</h1>

          <p className="result-card__message">
            Has completado el juego.
          </p>

          <p className="result-card__label">Puntaje obtenido:</p>

          <p className="result-card__score">
            {score}/{total}
          </p>

          <div className="result-card__actions">
            <button
              type="button"
              className="result-card__retry"
              onClick={() => navigate("/juego")}
            >
              Jugar de nuevo
            </button>

            <button
              type="button"
              className="result-card__ranking"
              onClick={() =>
                navigate("/ranking", {
                  state: { score, total },
                })
              }
            >
              Ver ranking
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ResultPage;