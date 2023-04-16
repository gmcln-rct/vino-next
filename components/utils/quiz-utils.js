import { LABELS } from "@/data/labels";

export const handleAnswerButtonClick = (
  selectedAnswer,
  quizData,
  currentQuestion
) => {
  const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
  const explanation = quizData[currentQuestion].explanation;
  let feedbackMessage;

//   console.log("is correct ", isCorrect);

  if (isCorrect) {
    feedbackMessage = explanation
      ? `${LABELS.messageForCorrectAnswerWithExplanation} ${explanation}`
      : LABELS.messageForCorrectAnswer;
  } else {
    feedbackMessage = explanation
      ? `${LABELS.messageForIncorrectAnswerWithExplanation} ${explanation}`
      : LABELS.messageForIncorrectAnswer;
  }

  return feedbackMessage;
};

export const handleNextButtonClick = (
  selectedAnswer,
  quizData,
  currentQuestion,
  score
) => {
  let newScore = score;
  let newCurrentQuestion = currentQuestion;
  let showResults = false;

  if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
    newScore += 1;
  }
  if (currentQuestion + 1 < quizData.length) {
    newCurrentQuestion += 1;
  } else {
    showResults = true;
  }

  return { newScore, newCurrentQuestion, showResults };
};

