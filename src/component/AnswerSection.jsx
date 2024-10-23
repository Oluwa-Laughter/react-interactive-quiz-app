import Button from "./Button";

export default function AnswerSection({
  curQuestion,
  reviewMode,
  userAnswers,
  questionId,
  handleAnswer,
  questions,
  handleNextQues,
  handlePrevQues,
}) {
  return (
    <section className="answer-section">
      <div className="answers">
        {curQuestion.answers.map((answer, i) => {
          let className = "answer-button";
          if (reviewMode) {
            if (answer.correct) {
              className += " correct";
            } else if (userAnswers[questionId] === i && !answer.correct) {
              className += " incorrect";
            }
          } else if (userAnswers[questionId] === i) {
            className += " selected";
          }

          return (
            <Button
              key={i}
              className={className}
              onClick={() => handleAnswer(i)}
              disabled={reviewMode}
            >
              {answer.text}
            </Button>
          );
        })}
      </div>

      <div className="buttons">
        {questionId > 1 && (
          <Button className="back_btn" onClick={handlePrevQues}>
            Back
          </Button>
        )}
        <Button className="next_btn" onClick={handleNextQues}>
          {questionId === questions.length ? "Submit" : "Next"}
        </Button>
      </div>
    </section>
  );
}
