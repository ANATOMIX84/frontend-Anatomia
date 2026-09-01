import "./QuizHeader.css";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
}

export function QuizHeader({
  currentQuestion,
  totalQuestions,
  timeLeft,
}: QuizHeaderProps) {
  const progress = (timeLeft / 10) * 100;

  return (
    <header className="quiz-header">
      <strong>
        Pregunta {currentQuestion}/{totalQuestions}
      </strong>

      <div className="quiz-header__timer">
        <span>Tiempo</span>

        <div className="quiz-header__bar">
          <div
            className="quiz-header__progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span>00:{String(timeLeft).padStart(2, "0")}</span>
      </div>
    </header>
  );
}