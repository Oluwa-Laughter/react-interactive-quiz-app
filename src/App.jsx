import { useEffect, useState, useRef } from "react";

export default function App() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
  ];

  const [questionId, setQuestionId] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [quizEnd, setQuizEnd] = useState(false);

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
    setUserAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleNextQues = () => {
    if (questionId < questions.length) setQuestionId((prev) => prev + 1);
    return () => endQuiz();
  };

  const handlePrevQues = () => {
    if (questionId > 1) {
      setQuestionId((prev) => prev - 1);
    }
  };

  const endQuiz = () => {
    setQuizEnd(true);
    setShowScore(true);
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
    setQuizEnd(false);
  };

  return (
    <main className="app">
      {showScore ? (
        <section className="score-section">
          <h1>
            You scored {score} out of {questions.length}
          </h1>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h2 className="question-count">
              Question {questionId}/{questions.length}
            </h2>
            <p className="question-text">{curQuestion.question}</p>
            <span className="timer">
              Time left: {Math.floor(timeLeft / 60)}:
              {timeLeft % 60 < 10 ? "0" : ""}
              {timeLeft % 60}
            </span>
          </section>

          <section className="answer-section">
            {curQuestion.answers.map((answer, i) => (
              <Button
                key={i}
                className={`answer-button`}
                onClick={() => handleAnswer(answer)}
              >
                {answer.text}
              </Button>
            ))}

            <div className="buttons">
              <Button className="back_btn" onClick={handlePrevQues}>
                Back
              </Button>

              <Button className="next_btn" onClick={handleNextQues}>
                {questionId === questions.length ? "Done" : "Next"}
              </Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
