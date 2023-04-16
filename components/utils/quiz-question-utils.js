
// Grapes in countries question
export function createGrapeQuestion(countryData, grapeType, includeNotTopGrape) {
    if (countryData) {
      const topGrapes = countryData.grapeData
        .sort((a, b) => b.value - a.value)
        .slice(0, 3)
        .map((grape) => (grape.grape));

        console.log("topGrapes ", topGrapes);
  
      let questionText;
      let correctAnswer;
      let explanation;
      if (includeNotTopGrape === "include") {
        questionText = `Which grape is one of the top 3 ${grapeType} grapes in ${countryData.itemName} based on land area of grape production?`;
        correctAnswer = topGrapes[Math.floor(Math.random() * topGrapes.length)];
        explanation = `${correctAnswer} is one of the top 3 ${grapeType} grapes in ${countryData.itemName} based on land area.`;
      } else {
        const notTopGrape = countryData.grapeData.find(
          (grape) => !topGrapes.includes(grape.grape) && grape.value !== 0
        ).grape;
        questionText = `Which grape is NOT one of the top 3 ${grapeType} grapes in ${countryData.itemName} based on land area of grape production?`;
        correctAnswer = notTopGrape;
        explanation = `${notTopGrape} is not one of the top 3 ${grapeType} grapes in ${countryData.itemName} based on land area.`;
      }
  
      const answers = [...topGrapes, correctAnswer].sort(() => Math.random() - 0.5);
  
      const questionObj = {
        question: questionText,
        questionType: "multiplechoice",
        answerSelectionType: "single",
        answers: answers,
        correctAnswer: correctAnswer,
        explanation: explanation,
      };
  
      return questionObj;
    }
  }

function createQuestionObject(
  countryAName,
  countryDataA,
  countryBName,
  countryDataB,
  randomYear
) {
  const correctAnswer =
    countryDataA.value > countryDataB.value ? countryAName : countryBName;

  const questionObj = {
    question: `In ${randomYear}, which country produced more wine: ${countryAName} or ${countryBName}?`,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: [countryAName, countryBName],
    correctAnswer: correctAnswer,
    explanation: `${countryAName} produced ${countryDataA.value.toLocaleString(
      "en-US"
    )} kiloliters of wine, while ${countryBName} produced ${countryDataB.value.toLocaleString(
      "en-US"
    )} kiloliters in ${randomYear}.`,
  };

  return questionObj;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createWineHistoryQuestion(data) {
  const randomYear = getRandomInt(1860, 2019);
  const randomCountryIndices = [];
  while (randomCountryIndices.length < 2) {
    const randomIndex = getRandomInt(0, data.length - 1);
    if (!randomCountryIndices.includes(randomIndex)) {
        randomCountryIndices.push(randomIndex);
    }
  }

  const countryA = data[randomCountryIndices[0]];
  const countryB = data[randomCountryIndices[1]];
  const countryAData = countryA.historicData.find((d) => d.year === randomYear);
  const countryBData = countryB.historicData.find((d) => d.year === randomYear);

  const countryAName = countryA.itemName;
  const countryBName = countryB.itemName;

  const questionObj = createQuestionObject(
    countryAName,
    countryAData,
    countryBName,
    countryBData,
    randomYear
  );

  return questionObj;

}

  export function createTermsQuestion(wineTerms) {
    const randomIndex = Math.floor(Math.random() * wineTerms.length);
  const randomTerm = wineTerms[randomIndex];

  // Choose two different random terms for the false answers
  const falseIndexes = [];
  while (falseIndexes.length < 2) {
    const falseIndex = Math.floor(Math.random() * wineTerms.length);
    if (falseIndex !== randomIndex && !falseIndexes.includes(falseIndex)) {
      falseIndexes.push(falseIndex);
    }
  }
  const falseTerm1 = wineTerms[falseIndexes[0]];
  const falseTerm2 = wineTerms[falseIndexes[1]];

  // Ensure the definitions are different
  if (falseTerm1.definition === randomTerm.definition || falseTerm2.definition === randomTerm.definition) {
    return createQuestionObject(wineTerms);
  }

  // Determine the correct answer position (0, 1, or 2) with the specified probabilities
  const correctAnswerPosition = Math.floor(Math.random() * 3);
  const answers = [
    correctAnswerPosition === 0 ? randomTerm.definition : falseTerm1.definition,
    correctAnswerPosition === 1 ? randomTerm.definition : correctAnswerPosition === 0 ? falseTerm2.definition : falseTerm1.definition,
    correctAnswerPosition === 2 ? randomTerm.definition : correctAnswerPosition === 0 ? falseTerm1.definition : falseTerm2.definition,
  ];

//   console.log("in create question object", answers);
//   console.log("correct answer ", answers[correctAnswerPosition]);

  const questionObject = {
    question: `Which of the following definitions matches the word "${randomTerm.word}"?`,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: answers,
    correctAnswer: answers[correctAnswerPosition],
    explanation: `The word "${randomTerm.word}" matches the definition: "${randomTerm.definition}".`,
    point: "10",
  };

  return questionObject;
}
  