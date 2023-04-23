import { useState, useEffect } from "react";
import classes from "./index.module.css";

// Import data
import { QUIZ_DATA } from "@/data/quiz-data";
import { WINE_TERMS } from "@/data/terms";
import { LABELS } from "@/data/labels";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";
import { HISTORIC_PRODUCTION_DATA } from "@/data/historic-production-data";

import {
  getTopGrapeCountry,
  createGrapeQuestion,
  createTermsQuestion,
  createWineHistoryQuestion,
  generateRegionQuestion,
} from "@/components/utils/quiz-question-utils";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [quizData, setQuizData] = useState(QUIZ_DATA);
  const [explanationMessage, setExplanationMessage] = useState("");
  const [correctness, setCorrectness] = useState(false);

  const [countryRedData, setCountryRedData] = useState(COUNTRIES_RED_WINE_DATA);
  const [countryWhiteData, setCountryWhiteData] = useState(COUNTRIES_WHITE_WINE_DATA);
  const [wineHistoryData, setWineHistoryData] = useState(HISTORIC_PRODUCTION_DATA
  );

  const answerIndex = ["A", "B", "C", "D"];
  
  useEffect(() => {
    const randomIndexRed = Math.floor(Math.random() * countryRedData.length);
    const randomIndexWhite = Math.floor(
      Math.random() * countryWhiteData.length
    );
    const countryRed = countryRedData[randomIndexRed];
    // console.log("countryRed", countryRed);
    const countryRedQuestion1 = createGrapeQuestion(countryRed, "red");
    const countryRedQuestion2 = createGrapeQuestion(
      countryRed,
      "red",
      "include"
    );

    const countryWhite = countryWhiteData[randomIndexWhite];
    console.log("countryWhite", countryWhite);

    let check = getTopGrapeCountry(countryWhiteData);
    console.log("check", check);
    const countryWhiteQuestion1 = createGrapeQuestion(
      countryWhite,
      "white",
      "include"
    );
    const countryWhiteQuestion2 = createGrapeQuestion(countryWhite, "white");
    const wineTermsQuestion = createTermsQuestion(WINE_TERMS);

    const wineHistoryQuestion = createWineHistoryQuestion(wineHistoryData);

    const wineRegionsQuestion1 = generateRegionQuestion(COUNTRIES_DATA, "inCountry");
    const wineRegionsQuestion2 = generateRegionQuestion(COUNTRIES_DATA, "notInCountry");
    // console.log("wineRegionsQuestion1", wineRegionsQuestion2);

    // let questionsLength = quizData.length;

    // if (score === 0) {
    //     setScoreComment("You need to study up on your wine knowledge.");
    // } else if (score < questionsLength / 2) {
    //     setScoreComment("Try beer. It's simpler...");
    // } else if (score < questionsLength * 0.8) {
    //     setScoreComment("You're getting there. Keep studying!");
    // } else if (score < questionsLength) {
    //     setScoreComment("You have been studying!");
    // } else {
    //     setScoreComment("You're a wine expert!");
    // }

    setQuizData([
      wineTermsQuestion,
      countryRedQuestion1,
      wineRegionsQuestion1,
      countryWhiteQuestion1,
      countryRedQuestion2,
      wineRegionsQuestion2,
      countryWhiteQuestion2,
      wineHistoryQuestion,
    ]);
  }, []);

  const handleAnswerButtonClick = (answerIndex) => {
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

  const handleNextButtonClick = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setFeedbackMessage("");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };



  return (
    <section className={classes.quizPage}>
      <div className={classes.headerSection}>
        <h1 className={classes.header}>Wine Quiz</h1>
        <p>Test your wine knowledge. Most questions are based on 2016 data.</p>
      </div>
      {showResults ? (
        <div className={classes.resultsContainer}>
          <h2 className={classes.results}>Your Results</h2>
          {/* <p>{scoreComment}</p> */}
          <p>
            You got {score} out of {quizData.length} questions correct.
          </p>
        </div>
      ) : (
        <div className={classes.questionContainer}>
          <h2>{quizData[currentQuestion].question}</h2>
          <p className={classes.instructions}>Click on correct answer below.</p>
          {selectedAnswer === null ? (
            quizData[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(String(index))}
                className={classes.answers}
              >
                <span className={classes.answerLetter}>
                  {answerIndex[index]}.
                </span>{" "}
                {answer}
              </button>
            ))
          ) : (
            <div className={classes.feedback}>
              <p className={correctness ? classes.correct : classes.incorrect}>
                {feedbackMessage}
              </p>
              <p className={classes.explanation}>{explanationMessage}</p>
              <button onClick={handleNextButtonClick} className={classes.next}>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default QuizPage;
