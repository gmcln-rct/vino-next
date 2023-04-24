export function generateHeader(props) {

    const {dataType, itemName, explanationText, selectedGrapeType} = props;
    let headerText;
    
    if (dataType === "grape") {
        headerText = itemName + ": " + explanationText;
      } else {
        headerText =
        explanationText + " " +
         selectedGrapeType + " Grape Varietals"
      
      }
    // console.log('headerText', headerText)
      return headerText;
}

export function generateSubheader(props) {

    const {dataType, itemName, selectedGrapeType, dataYear} = props;
    let subHeaderText;
    
    if (dataType === "grape") {
        subHeaderText =
          "Winegrape land area used for production, Top " +
          itemName +
          " grape producing countries,  " +
          dataYear;
      } else {
        subHeaderText =
        "Production of " +
        // selectedGrapeType +
        " grape varietals, " +
          " by country, measured in land area, " +
          // explanationText +
          " " +
          dataYear;
      }

      return subHeaderText;
}