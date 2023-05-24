import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import classes from "./quiz.module.css";

import DataSource from "@/components/layout/data-source";

// Import data
import { QUIZ_DATA } from "@/data/quiz-data";
import { WINE_TERMS } from "@/data/terms";
import { LABELS } from "@/data/labels";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";
import { HISTORIC_PRODUCTION_DATA } from "@/data/historic-production-data";
import { HISTORIC_CONSUMPTION_DATA } from "@/data/historic-consumption-data";
import { COUNTRY_ORIGIN_DATA } from "@/data/country-origin-data";

import {
  getRandomCountry,
  createGrapeQuestion,
  createTermsQuestion,
  createWineHistoryQuestion,
  generateRegionQuestion,
  createGrapeOriginQuestion,
  createGrapeColorQuestion,
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
  const [countryWhiteData, setCountryWhiteData] = useState(
    COUNTRIES_WHITE_WINE_DATA
  );
  const [wineHistoryData, setWineHistoryData] = useState(
    HISTORIC_PRODUCTION_DATA
  );

  const answerIndex = ["A", "B", "C", "D"];

  useEffect(() => {
    const countryRed1 = getRandomCountry(countryRedData);
    const countryRed2 = getRandomCountry(countryRedData);
    const countryWhite1 = getRandomCountry(countryWhiteData);
    const countryWhite2 = getRandomCountry(countryWhiteData);

    // Create quiz questions
    const countryRedQuestion1 = createGrapeQuestion(countryRed1, "red");
    const countryRedQuestion2 = createGrapeQuestion(
      countryRed2,
      "red",
      "include"
    );
    const countryWhiteQuestion1 = createGrapeQuestion(
      countryWhite1,
      "white",
      "include"
    );
    const countryWhiteQuestion2 = createGrapeQuestion(countryWhite2, "white");

    const wineTermsQuestion = createTermsQuestion(WINE_TERMS);
    const wineHistoryProductionQuestion = createWineHistoryQuestion(
      wineHistoryData,
      "produced"
    );
    // const wineHistoryConsumptionQuestion = createWineHistoryQuestion(
    //   HISTORIC_CONSUMPTION_DATA,
    //   "consumed"
    // );
    const wineRegionsQuestion1 = generateRegionQuestion(
      COUNTRIES_DATA,
      "inCountry"
    );
    const wineRegionsQuestion2 = generateRegionQuestion(
      COUNTRIES_DATA,
      "notInCountry"
    );

    const countryOriginQuestion =
      createGrapeOriginQuestion(COUNTRY_ORIGIN_DATA);
    const grapeColorQuestion = createGrapeColorQuestion(COUNTRY_ORIGIN_DATA);

    setQuizData([
      wineTermsQuestion,
      countryRedQuestion1,
      wineHistoryProductionQuestion,
      wineRegionsQuestion1,
      countryWhiteQuestion1,
      grapeColorQuestion,
      countryRedQuestion2,
      // wineHistoryConsumptionQuestion,
      countryOriginQuestion,
      wineRegionsQuestion2,
      countryWhiteQuestion2,
    ]);
  }, [countryRedData, countryWhiteData, wineHistoryData]);

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

  const handleRestartButtonClick = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <>
      <Head>
        <title>Wine Quiz - Winography | Learn About Wine Through Data Visualizations</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>

      <section className={classes.quizPage}>
        <div className={classes.headerSection}>
          <h1 className={classes.header}>Wine Quiz</h1>
          <p>Test your wine knowledge.</p>
        </div>
        {showResults ? (
          <div className={classes.resultsContainer}>
            <h2 className={classes.results}>Your Results</h2>
            <p>
              You got {score} out of {quizData.length} questions correct.
            </p>
            <button onClick={handleRestartButtonClick} className={classes.next}>
              Take Another Quiz
            </button>
          </div>
        ) : (
          <div className={classes.questionContainer}>
            <h2 className={classes.questionLabel}>
              Question {currentQuestion + 1} of 10
            </h2>
            <h2 className={classes.questionText}>
              {quizData[currentQuestion].question}
            </h2>
            {selectedAnswer === null ? (
              <p className={classes.instructions}>
                Click on correct answer below.
              </p>
            ) : (
              <p></p>
            )}
            {/* // <p className={classes.instructions}>Click on correct answer below.</p> */}
            <div className={classes.answers}>
              {selectedAnswer === null ? (
                quizData[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButtonClick(String(index))}
                    className={classes.answer}
                  >
                    <span className={classes.answerLetter}>
                      {answerIndex[index]}.
                    </span>{" "}
                    {answer}
                  </button>
                ))
              ) : (
                <div className={classes.feedback}>
                  <p
                    className={
                      correctness ? classes.correct : classes.incorrect
                    }
                  >
                    {feedbackMessage}
                  </p>
                  <p className={classes.explanation}>{explanationMessage}</p>
                  <button
                    onClick={handleNextButtonClick}
                    className={classes.next}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <div className={classes.footer}>
          <DataSource />
        </div>
      </section>
    </>
  );
};

export default QuizPage;
