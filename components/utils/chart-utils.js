export function generateHeader(props) {

    const {dataType, itemName, explanationText, selectedGrapeType} = props;
    let headerText;
    let grapeType = selectedGrapeType.slice(0,1).toUpperCase() + selectedGrapeType.slice(1);
    
    if (dataType === "grape") {
        headerText = itemName + ": " + explanationText;
      } else {
        headerText =
        explanationText + " Top " +
         grapeType + " Grapes"
      
      }
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
        selectedGrapeType +
        " grape varietals, measured in land area, " +
          // explanationText +
          " " +
          dataYear;
      }

      return subHeaderText;
}