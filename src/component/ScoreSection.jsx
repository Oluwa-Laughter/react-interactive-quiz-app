import Button from "./Button";
import image from "/image/award.svg";

export default function ScoreSection({
  calculateScore,
  questions,
  resetQuiz,
  handleReview,
}) {
  return (
    <section className="score-section">
      <h3>
        You scored {calculateScore()} out of {questions.length}
      </h3>
      <div className="restart-review">
        <Button onClick={resetQuiz}>Play Again</Button>
        <Button onClick={handleReview}>Review Answers</Button>
      </div>
      <img src={image} alt="winner" />
    </section>
  );
}
