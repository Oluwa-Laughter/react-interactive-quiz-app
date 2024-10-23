export default function QuestionSection({
  questionId,
  questions,
  curQuestion,
  reviewMode,
  timeLeft,
}) {
  return (
    <section className="question-section">
      <h2 className="question-count">
        Question {questionId}/{questions.length}
      </h2>
      <p className="question-text">{curQuestion.question}</p>
      {!reviewMode && (
        <span className="timer">
          Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
          {timeLeft % 60}
        </span>
      )}
    </section>
  );
}
