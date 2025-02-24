export function getHeaders(
  dataType,
  itemName,
  explanationText,
  dataYear,
  selectedGrapeType,
  topType,
  countryName,
  headerSuffix
) {
  let headerText = "";
  let subHeaderText = "";
  let grapeTypeText = selectedGrapeType.toLowerCase();
  const grapeTypeTextCapitalized = grapeTypeText.charAt(0).toUpperCase() + grapeTypeText.slice(1);

  if (dataType === "grape") {
    headerText = itemName + ": " + explanationText;
    subHeaderText =
      "Winegrape land area used for production, Top " +
      itemName +
      " grape producing countries,  " +
      dataYear;
  } else if (topType === "national") {
    headerText = headerSuffix + grapeTypeTextCapitalized + " Grapes of " + countryName;
    subHeaderText =
      explanationText +
      countryName +
      "'s top " +
      grapeTypeText +
      " grape varietals, by land area, " +
      dataYear;
  } else if (topType === "global") {
    headerText = headerSuffix + grapeTypeTextCapitalized + " Grapes in " + countryName;
    subHeaderText =
      explanationText +
      " " +
      grapeTypeText +
      " grape varietals in " +
      countryName +
      ", by land area, " +
      dataYear;
  } else {
    headerText = headerSuffix + selectedGrapeType + " Grapes in " + countryName;
    subHeaderText =
      explanationText +
      " " +
      grapeTypeText +
      " grape varietals in " +
      countryName +
      ", by land area, " +
      dataYear;
  }

  const headerObj = {
    headerText: headerText,
    subHeaderText: subHeaderText,
  };
  return headerObj;
}
