function checkValuesGreaterThanZero(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value > 0) {
      count++;
      if (count >= 3) {
        return true;
      }
    }
  }
  return false;
}

export function getRandomCountry(countryDataByType) {
  let randomCountry;
  let grapesWithValueGreaterThanZero = [];

  while (grapesWithValueGreaterThanZero.length < 3) {
    const randomIndex = Math.floor(Math.random() * countryDataByType.length);
    randomCountry = countryDataByType[randomIndex];
    if (checkValuesGreaterThanZero(randomCountry.grapeData)) {
      grapesWithValueGreaterThanZero.push(randomCountry);
    }
  }

  return randomCountry;
}

// Grapes in countries question
export function createGrapeQuestion(
  countryData,
  grapeType,
  includeNotTopGrape
) {
  if (countryData) {
    const topGrapes = countryData.grapeData
      .sort((a, b) => b.value - a.value)
      .slice(0, 3)
      .map((grape) => grape.grape);

    let notTopGrapeArr = countryData.grapeData
      .filter((grape) => !topGrapes.includes(grape.grape))
      .map((grape) => grape.grape);
    let notTopGrapeArrLength = notTopGrapeArr.length;

    let newArr = notTopGrapeArr.slice(
      notTopGrapeArrLength - 4,
      notTopGrapeArrLength - 1
    );
    notTopGrapeArr = newArr;
    let questionText;
    let correctAnswer;
    let explanation;
    if (includeNotTopGrape === "include") {
      questionText = `Which of the following is one of the top 3 ${grapeType} grapes produced in ${countryData.itemName} (based on land area)?`;
      correctAnswer = topGrapes[Math.floor(Math.random() * topGrapes.length)];
      explanation = `${correctAnswer} is one of the top 3 ${grapeType} grapes in ${countryData.itemName}.`;
    } else {
      if (topGrapes) {
        const notTopGrape = countryData.grapeData.find(
          (grape) => !topGrapes.includes(grape.grape)
        ).grape;
        questionText = `Which of the following is NOT one of the top 3 ${grapeType} grapes produced in ${countryData.itemName} (based on land area)?`;
        correctAnswer = notTopGrape;
        explanation = `${notTopGrape} is not one of the top 3 ${grapeType} grapes in ${countryData.itemName}.`;
      }
    }

    const answers =
      includeNotTopGrape === "include"
        ? [...notTopGrapeArr, correctAnswer].sort(() => Math.random() - 0.5)
        : [...topGrapes, correctAnswer].sort(() => Math.random() - 0.5);

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
  if (
    falseTerm1.definition === randomTerm.definition ||
    falseTerm2.definition === randomTerm.definition ||
    falseTerm1.definition === falseTerm2.definition
  ) {
    return createQuestionObject(wineTerms);
  }

  // Determine the correct answer position (0, 1, or 2) with the specified probabilities
  const correctAnswerPosition = Math.floor(Math.random() * 3);
  const answers = [
    correctAnswerPosition === 0 ? randomTerm.definition : falseTerm1.definition,
    correctAnswerPosition === 1 ? randomTerm.definition : falseTerm2.definition,
    correctAnswerPosition === 2
      ? randomTerm.definition
      : falseTerm1.definition !== falseTerm2.definition
      ? falseTerm1.definition
      : createTermsQuestion(wineTerms).answers[2],
  ];

  const questionObject = {
    question: `Which of the following definitions matches the word "${randomTerm.word}"?`,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: answers,
    correctAnswer: answers[correctAnswerPosition],
    explanation: `The word "${randomTerm.word}" matches the definition: "${randomTerm.definition}".`,
    point: "1",
  };

  return questionObject;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateRegionQuestion(countries, questionType) {
  const selectedCountry = getRandom(countries);
  const otherCountries = countries.filter(
    (country) => country.id !== selectedCountry.id
  );
  const selectedRegion = getRandom(selectedCountry.regions);
  const correctRegions = selectedCountry.regions.slice(0, 3);
  const incorrectRegion = getRandom(getRandom(otherCountries).regions);

  function getThreeIncorrectRegions() {
    let incorrectThreeRegions = [];
    while (incorrectThreeRegions.length < 3) {
      const incorrectRegion = getRandom(getRandom(otherCountries).regions);
      if (!incorrectThreeRegions.includes(incorrectRegion)) {
        incorrectThreeRegions.push(incorrectRegion);
      }
    }
    return incorrectThreeRegions;
  }

  const incorrectRegions = getThreeIncorrectRegions();

  let answers, questionText, correctAnswer, explanation;

  let countryName =
    selectedCountry.itemName !== "United States"
      ? selectedCountry.itemName
      : "the United States";

  if (questionType === "inCountry") {
    answers = incorrectRegions
      .concat(selectedRegion)
      .sort(() => Math.random() - 0.5);
    questionText = `Which of the following regions is a wine region of ${countryName}?`;
    correctAnswer = selectedRegion;
    explanation = `${correctAnswer} is a region of ${selectedCountry.itemName}.`;
  } else {
    answers = correctRegions
      .slice(0, 3)
      .concat(incorrectRegion)
      .sort(() => Math.random() - 0.5);
    questionText = `Which of the following regions is NOT a region of ${countryName}?`;
    correctAnswer = incorrectRegion;
    explanation = `${correctAnswer} is not a region of ${countryName}.`;
  }

  return {
    question: questionText,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: answers,
    correctAnswer: correctAnswer,
    explanation: explanation,
  };
}

function getRandomizedAnswers(answerOptions, grapes, questionType) {
    // Add unique random countries as incorrect answers
    while (answerOptions.length < 4) {
      const country = grapes[Math.floor(Math.random() * grapes.length)].originCountry;
      if (!answerOptions.some(option => option === questionType)) {
        answerOptions.push(country);
      }
    }
  
    // Shuffle answer options to randomize order
    for (let i = answerOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answerOptions[i], answerOptions[j]] = [answerOptions[j], answerOptions[i]];
    }
    return answerOptions;
}

// Country of Origin Questions
export function createGrapeOriginQuestion(grapes) {
  const grape = grapes[Math.floor(Math.random() * grapes.length)];
  const answerOptions = [grape.originCountry];

  getRandomizedAnswers(answerOptions, grapes, "country");

  // Add unique random countries as incorrect answers
  // while (answerOptions.length < 4) {
  //   const country = grapes[Math.floor(Math.random() * grapes.length)].originCountry;
  //   if (!answerOptions.some(option => option === country)) {
  //     answerOptions.push(country);
  //   }
  // }

  // Shuffle answer options to randomize order
  // for (let i = answerOptions.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [answerOptions[i], answerOptions[j]] = [answerOptions[j], answerOptions[i]];
  // }


  return {
    question: `What is the country of origin of the grape "${grape.grape}"?`,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: answerOptions,
    correctAnswer: grape.originCountry,
    explanation: `The grape "${grape.grape}" is originally from ${grape.originCountry}.`,
    point: "1"
  };
}

export function createGrapeColorQuestion(grapes) {
  const grape = grapes[Math.floor(Math.random() * grapes.length)];

  return {
    question: `Is ${grape.grape} a red or white grape"?`,
    questionType: "multiplechoice",
    answerSelectionType: "single",
    answers: ["red", "white"],
    correctAnswer: grape.grapeType,
    explanation: `${grape.grape} is a ${grape.grapeType} grape.`,
    point: "1"
  };


}
