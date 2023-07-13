import { useState, useEffect } from "react";

import { LABELS } from "@/data/labels";

export const handleAnswerButtonHelper = (
  answerIndex,
  quizData,
  currentQuestion,
  setExplanationMessage,
  setSelectedAnswer,
  setFeedbackMessage,
  setCorrectness,
) => {
  const selectedAnswer = quizData[currentQuestion].answers[answerIndex];
  const correctAnswer = quizData[currentQuestion].correctAnswer;
  const isCorrect = selectedAnswer == correctAnswer;
  const explanation = quizData[currentQuestion].explanation;

  setSelectedAnswer(selectedAnswer);
  setExplanationMessage(explanation);

  if (isCorrect) {
    setFeedbackMessage(
      explanation
        ? `${LABELS.messageForCorrectAnswerWithExplanation}`
        : LABELS.messageForCorrectAnswer
    );
    setCorrectness(true);
  } else {
    setFeedbackMessage(
      explanation
        ? `${LABELS.messageForIncorrectAnswerWithExplanation}`
        : LABELS.messageForIncorrectAnswer
    );
    setCorrectness(false);
  }
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

