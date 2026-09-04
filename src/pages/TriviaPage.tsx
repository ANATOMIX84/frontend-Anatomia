import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionCard } from "../components/game/QuestionCard";
import { QuizHeader } from "../components/game/QuizHeader";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { questionsPorSistema } from "../data/questions";
import "./TriviaPage.css";

function TriviaPage() {
  const navigate = useNavigate();
  const { tema } = useParams();

  const preguntas = questionsPorSistema[tema || ""];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  // Si el sistema no existe, volver al selector de juego
  if (!preguntas) {
    navigate("/juego");
    return null;
  }

  const currentQuestion = preguntas[questionIndex];

  const nextQuestion = useCallback(
    (answer: number | null) => {
      const isCorrect = answer === currentQuestion.correctOption;
      const nextScore = isCorrect ? score + 1 : score;

      if (questionIndex === preguntas.length - 1) {
        navigate("/resultado", {
          state: {
            score: nextScore,
            total: preguntas.length,
          },
        });
        return;
      }

      setScore(nextScore);
      setQuestionIndex((current) => current + 1);
      setSelectedOption(null);
      setTimeLeft(10);
    },
    [
      currentQuestion.correctOption,
      navigate,
      questionIndex,
      score,
      preguntas.length,
    ]
  );

  useEffect(() => {
    if (selectedOption !== null) return;

    const timer = window.setTimeout(() => {
      if (timeLeft > 1) {
        setTimeLeft((current) => current - 1);
      } else {
        nextQuestion(null);
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [timeLeft, selectedOption, nextQuestion]);

  return (
    <>
      <Navbar />

      <main className="game-page">
        <section className="game-page__panel">
          <QuizHeader
            currentQuestion={questionIndex + 1}
            totalQuestions={preguntas.length}
            timeLeft={timeLeft}
          />

          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />

          <div className="game-page__actions">
            <button
              type="button"
              className="game-page__exit"
              onClick={() => navigate("/home")}
            >
              Salir
            </button>

            <button
              type="button"
              className="game-page__next"
              disabled={selectedOption === null}
              onClick={() => nextQuestion(selectedOption)}
            >
              Siguiente
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TriviaPage;