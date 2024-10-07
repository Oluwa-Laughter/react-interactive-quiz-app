import { useEffect, useState, useRef } from "react";
import { questions } from "./Question";
import AnswerSection from "./component/AnswerSection";
import QuestionSection from "./component/QuestionSection";
import ScoreSection from "./component/ScoreSection";
import StartQuiz from "./component/StartQuiz";

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
        <ScoreSection
          calculateScore={calculateScore}
          questions={questions}
          resetQuiz={resetQuiz}
          handleReview={handleReview}
        />
      ) : (
        <>
          <QuestionSection
            questionId={questionId}
            questions={questions}
            curQuestion={curQuestion}
            reviewMode={reviewMode}
            timeLeft={timeLeft}
          />

          <AnswerSection
            curQuestion={curQuestion}
            userAnswers={userAnswers}
            questionId={questionId}
            handleAnswer={handleAnswer}
            reviewMode={reviewMode}
            handlePrevQues={handlePrevQues}
            questions={questions}
            handleNextQues={handleNextQues}
          />
        </>
      )}
    </main>
  );
}
