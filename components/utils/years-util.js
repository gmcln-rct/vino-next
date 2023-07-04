export function yearsFilter(data, width) {
    const yearsArray = data.filter((d) => d.year.toString().slice(3) === "0").map(d => d.year);
    let filteredYears;
    if (width > 768) {
      filteredYears = yearsArray;
    } else if (width > 400) {
      filteredYears = yearsArray.filter((year, index) => (index % 3) === 0 )
    } else {
      filteredYears = [yearsArray[0], yearsArray[Math.ceil(yearsArray.length/2)], yearsArray[yearsArray.length-1]]
    }
    return filteredYears;
}