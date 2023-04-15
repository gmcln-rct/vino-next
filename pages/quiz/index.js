import { useState, useEffect, use } from "react";

// Import data
import { QUIZ_DATA } from "@/data/quiz-data";
import { WINE_TERMS } from "@/data/terms";
import { LABELS } from "@/data/labels";
import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";
import { HISTORIC_PRODUCTION_DATA } from "@/data/historic-production-data";

import {
  createGrapeQuestion,
  createTermsQuestion,
  createWineHistoryQuestion,
} from "@/components/utils/quiz-utils";

import classes from "./index.module.css";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [quizData, setQuizData] = useState(QUIZ_DATA);
  const [explanationMessage, setExplanationMessage] = useState("");

  //   const [randomIndex, setRandomIndex] = useState(0);
  const [countryRedData, setCountryRedData] = useState(COUNTRIES_RED_WINE_DATA);
  const [countryWhiteData, setCountryWhiteData] = useState(COUNTRIES_WHITE_WINE_DATA);
  const [wineHistoryData, setWineHistoryData] = useState(
    HISTORIC_PRODUCTION_DATA
  );

//   console.log("country red data ", countryRedData);


  useEffect(() => {
    const randomIndexRed = Math.floor(Math.random() * countryRedData.length);
    // let randomIndexWhite = Math.floor(Math.random() * countryWhiteData.length);
    const countryRed = countryRedData[randomIndexRed];
    const countryRedQuestion = createGrapeQuestion(countryRed);


    // const countryWhite = countryWhiteData[randomIndexWhite];
    // const countryWhiteQuestion = createGrapeQuestion(countryWhite);
    //   console.log("country Red", countryRedQuestion);
    const wineTermsQuestion = createTermsQuestion(WINE_TERMS);

    // const randomIndexQuizQuestions = Math.floor(Math.random() * quizData.length);
    // const quizQuestion = quizData[randomIndexQuizQuestions];
    console.log("wine terms index quiz questions ", wineTermsQuestion);
    const wineHistoryQuestion = createWineHistoryQuestion(wineHistoryData);

    setQuizData([ wineTermsQuestion, countryRedQuestion, wineHistoryQuestion]);
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
    } else {
      setFeedbackMessage(
        explanation
          ? `${LABELS.messageForIncorrectAnswerWithExplanation}`
          : LABELS.messageForIncorrectAnswer
      );
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
<h1 className={classes.header}>Wine Quiz</h1>
<p>Test your wine knowledge. Most questions are based on 2016 data.</p>
      {showResults ? (
        <div className="results-container">
          <h2 className={classes.results}>Results</h2>
          <p>
            You got {score} out of {quizData.length} questions correct.
          </p>
        </div>
      ) : (
        <div className={classes.questionContainer}>
          <h2>{quizData[currentQuestion].question}</h2>
          {selectedAnswer === null ? (
            quizData[currentQuestion].answers.map((answer, index) => (
                <>
               
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(String(index))}
                className={classes.answers}
              >
                <span>{index +1}.</span> {answer}
              </button>
              </>
            ))
          ) : (
            <div className={classes.feedback}>
              <p>{feedbackMessage}</p>
              <p>{explanationMessage}</p>
              <button onClick={handleNextButtonClick} className={classes.next}>Next</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

//   const onAnswerButtonClick = (selectedAnswer) => {
//     const feedbackMessage = handleAnswerButtonClick(selectedAnswer, quizData, currentQuestion);
//     setSelectedAnswer(selectedAnswer);
//     setFeedbackMessage(feedbackMessage);
//   };

//   const onNextButtonClick = () => {
//     const { newScore, newCurrentQuestion, showResults } = handleNextButtonClick(selectedAnswer, quizData, currentQuestion, score);
//     setSelectedAnswer(null);
//     setFeedbackMessage('');
//     setCurrentQuestion(newCurrentQuestion);
//     setScore(newScore);
//     setShowResults(showResults);
//   };

//   return (
//     <section className={classes.quizPage}>
//         <h1 className={classes.header}>Wine Quiz</h1>
//         <p>Test your wine knowledge. Note most questions based on 2016 data.</p>
//       {showResults ? (
//         <div className="results-container">
//           <h2>Results</h2>
//           <p>
//             You scored {score} out of {quizData.length} questions.
//           </p>
//         </div>
//       ) : (
//         <div className={classes.questionContainer}>
//           <h2>{quizData[currentQuestion].question}</h2>
//           {selectedAnswer === null
//             ? quizData[currentQuestion].answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   onClick={() => onAnswerButtonClick(String(index))}
//                   className={classes.answers}
//                 >
//                   {answer}
//                 </button>
//               ))
//             : (
//                 <div className={classes.feedback}>
//                   <p>{feedbackMessage}</p>
//                   <button onClick={onNextButtonClick} className={classes.next}>Next</button>
//                 </div>
//               )}
//         </div>
//       )}
//     </section>
//   );
// };

export default QuizPage;
