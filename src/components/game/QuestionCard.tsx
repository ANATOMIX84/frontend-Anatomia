import "./QuestionCard.css";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelect: (optionIndex: number) => void;
}

export function QuestionCard({
  question,
  options,
  selectedOption,
  onSelect,
}: QuestionCardProps) {
  const letters = ["A", "B", "C", "D"];

  return (
    <section className="question-card">
      <h1>{question}</h1>

      <div className="question-card__answers">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={`answer-option ${
              selectedOption === index ? "answer-option--selected" : ""
            }`}
            onClick={() => onSelect(index)}
          >
            <strong>{letters[index]})</strong>
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}