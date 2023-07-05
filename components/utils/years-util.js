export function yearsFilter(data, width) {
  const yearsArray = data
    .filter((d) => d.year.toString().slice(3) === "0")
    .map((d) => d.year);
  let filteredYears;
  if (width > 768) {
    filteredYears = yearsArray;
  } else if (width > 400) {
    filteredYears = yearsArray.filter((year, index) => index % 3 === 0);
  } else {
    filteredYears = [
      yearsArray[0],
      yearsArray[Math.ceil(yearsArray.length / 2)],
      yearsArray[yearsArray.length - 1],
    ];
  }
  return filteredYears;
}

export function valuesTranslator(data, country1, country2, width) {
  let max = 0;
  data.forEach((item) => {
    for (let key in item) {
      if (key !== "year" && item[key] > max) {
        max = item[key];
      }
    }
  });
  return max;

  let filteredValues;
  if (width > 768) {
    filteredValues = valuesArray;
  } else if (width > 400) {
    filteredValues = valuesArray.filter((year, index) => index % 3 === 0);
  } else {
    filteredValues = [
      valuesArray[0],
      valuesArray[Math.ceil(valuesArray.length / 2)],
      valuesArray[valuesArray.length - 1],
    ];
  }
  return filteredValues;
}
