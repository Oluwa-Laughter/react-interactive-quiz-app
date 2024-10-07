import { useEffect, useState, useRef } from "react";
import { questions } from "./Question";

export default function App() {
  const [questionId, setQuestionId] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStart, setQuizStart] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endQuiz();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, showScore]);

  const curQuestion = questions.find((q) => q.id === questionId);

  const handleAnswer = (answerId) => {
    if (!quizEnd && !reviewMode) {
      setUserAnswers((prev) => ({ ...prev, [questionId]: answerId }));
    }
  };

  const handleNextQues = () => {
    if (questionId < questions.length) {
      setQuestionId((prev) => prev + 1);
    } else {
      endQuiz();
    }
  };

  const handlePrevQues = () => {
    if (questionId > 1) {
      setQuestionId((prev) => prev - 1);
    }
  };

  const handleStartQuiz = () => {
    setQuizStart(true);
    setShowScore(false);
    setTimeLeft(15 * 60);
    setQuestionId(1);
    setUserAnswers({});
    setQuizEnd(false);
    setReviewMode(false);
  };

  const endQuiz = () => {
    setQuizEnd(true);
    setShowScore(true);
    clearTimeout(timerRef.current);
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      const userAnswer = userAnswers[question.id];
      const correctAnswer = question.answers.findIndex((a) => a.correct);
      return score + (userAnswer === correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setQuestionId(1);
    setUserAnswers({});
    setShowScore(false);
    setTimeLeft(15 * 60);
    setQuizStart(false);
    setQuizEnd(false);
    setReviewMode(false);
  };

  const handleReview = () => {
    setQuestionId(1);
    setReviewMode(true);
    setShowScore(false);
    clearTimeout(timerRef.current);
  };

  return (
    <main className="app">
      {!quizStart ? (
        <StartQuiz onStart={handleStartQuiz} questions={questions} />
      ) : showScore ? (
        <section className="score-section">
          <h3>
            You scored {calculateScore()} out of {questions.length}
          </h3>
          <div className="restart-review">
            <Button onClick={resetQuiz}>Play Again</Button>
            <Button onClick={handleReview}>Review Answers</Button>
          </div>

          <img src="/image/award.svg" alt="winner" />
        </section>
      ) : (
        <>
          <section className="question-section">
            <h2 className="question-count">
              Question {questionId}/{questions.length}
            </h2>
            <p className="question-text">{curQuestion.question}</p>
            {!reviewMode && (
              <span className="timer">
                Time left: {Math.floor(timeLeft / 60)}:
                {timeLeft % 60 < 10 ? "0" : ""}
                {timeLeft % 60}
              </span>
            )}
          </section>

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
        </>
      )}
    </main>
  );
}

function StartQuiz({ onStart, questions }) {
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

function Button({ children, onClick, className, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
