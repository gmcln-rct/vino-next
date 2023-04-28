export function getFeaturedData(data) {
  return data.filter((dataItem) => dataItem.isFeatured);
}

export function getTopData(data) {
  return data.filter((dataItem) => dataItem.isTop);
}

export function getAllData(data) {
  return data;
}

export function getFilteredData(dateFilter) {
  const { year, month } = dateFilter;

  let filteredData = data.filter((dataItem) => {
    const dataItemDate = new Date(dataItem.date);
    return (
      dataItemDate.getFullYear() === year &&
      dataItemDate.getMonth() === month - 1
    );
  });

  return filteredData;
}

export function getDataItemById(id, data) {
  return data.find((dataItem) => dataItem.id === id);
}

export function filterCountriesData(countriesData) {
  return countriesData.map(({ id, itemName }) => ({ id, itemName }));
}


export function convertToStackedFormat(data, countries) {
  const stackedData = [];

  const countryNames = countries;

  // Get all the unique years
  const years = [...new Set(data.flatMap(d => d.historicData.map(hd => hd.year)))];

  // Loop through each year
  years.forEach(year => {
    const stackedYearData = { year };

    // Loop through each country and get the corresponding wine consumption value for the current year
    countryNames.forEach(countryName => {
      const countryData = data.find(cd => cd.itemName === countryName);
      const wineConsumption = countryData.historicData.find(hd => hd.year === year)?.value;
      if (wineConsumption !== undefined && wineConsumption !== 0) {
        stackedYearData[countryName] = wineConsumption;
      }
    });

    stackedData.push(stackedYearData);
  });

  return stackedData;
}

// // Usage example
// const stackedData = convertToStackedFormat(HISTORIC_PRODUCTION_DATA);
// console.log(stackedData);
