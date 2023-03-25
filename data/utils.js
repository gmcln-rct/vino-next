export function getFeaturedData(data) {
    return data.filter((dataItem) => dataItem.isFeatured);
  }

  export function getTopData() {
    return data.filter((dataItem) => dataItem.isTop);
  }
  
  export function getAllData() {
    return data;
  }
  
  export function getFilteredData(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredData = data.filter((dataItem) => {
      const dataItemDate = new Date(dataItem.date);
      return (
        dataItemDate.getFullYear() === year && dataItemDate.getMonth() === month - 1
      );
    });
  
    return filteredData;
  }
  
  export function getDataItemById(id, data) {
    return data.find((dataItem) => dataItem.id === id);
  }
  