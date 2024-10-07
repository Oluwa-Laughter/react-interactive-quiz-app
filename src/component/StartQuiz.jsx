import Button from "./Button";

export default function StartQuiz({ onStart, questions }) {
  return (
    <section className="start-quiz">
      <h1>Welcome to React Interactive Quiz!</h1>
      <div className="instructions">
        <p>Instructions:</p>
        <ul>
          <li>You have 15 minutes to complete the quiz.</li>
          <li>There are {questions.length} questions in total.</li>
          <li>Each correct answer is worth 1 point.</li>
          <li>
            You can navigate between questions using the Next and Back buttons.
          </li>
          <li>Your score will be displayed at the end of the quiz.</li>
        </ul>
      </div>
      <Button className="start-btn" onClick={onStart}>
        Start Quiz
      </Button>
    </section>
  );
}
