import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { authRepository } from "../repositories/authRepository";
import "./RankingPage.css";

interface RankingState {
  score?: number;
  total?: number;
}

interface RankingPlayer {
  name: string;
  score: number;
  date: string;
  isCurrentUser?: boolean;
}

function RankingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = authRepository.getCurrentUser();

  const result = location.state as RankingState | null;
  const score = result?.score ?? 0;
  const total = result?.total ?? 0;

  const currentPlayer: RankingPlayer | null =
    user && total > 0
      ? {
          name: user.name,
          score: Math.round((score / total) * 100),
          date: "Hoy",
          isCurrentUser: true,
        }
      : null;

  const ranking: RankingPlayer[] = [
    ...(currentPlayer ? [currentPlayer] : []),
    { name: "AnaMed", score: 98, date: "12/05/2026" },
    { name: "DoctorX", score: 92, date: "12/05/2026" },
    { name: "BioMaster", score: 87, date: "12/05/2026" },
    { name: "EstudiantePro", score: 76, date: "11/05/2026" },
    { name: "AnatomyKing", score: 65, date: "11/05/2026" },
  ].sort((a, b) => b.score - a.score);

  return (
    <>
      <Navbar />

      <main className="ranking-page">
        <section className="ranking-card">
          <header className="ranking-card__header">
            <span aria-hidden="true">🏆</span>

            <div>
              <p>COMPETENCIA</p>
              <h1>Ranking de jugadores</h1>
            </div>
          </header>

          {total > 0 && (
            <p className="ranking-card__last-score">
              Tu último resultado: <strong>{score}/{total}</strong>
            </p>
          )}

          <div className="ranking-card__table-container">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jugador</th>
                  <th>Puntaje</th>
                  <th>Fecha</th>
                </tr>
              </thead>

              <tbody>
                {ranking.map((player, index) => (
                  <tr
                    key={`${player.name}-${index}`}
                    className={player.isCurrentUser ? "ranking-table__current" : ""}
                  >
                    <td>{index + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.score} pts</td>
                    <td>{player.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            className="ranking-card__button"
            onClick={() => navigate("/juego")}
          >
            Jugar de nuevo
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default RankingPage;