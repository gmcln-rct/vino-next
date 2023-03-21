export function getFeaturedData(data) {
    return data.filter((event) => event.isFeatured);
  }
  
  export function getAllData() {
    return data;
  }
  
  export function getFilteredData(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredData = data.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  
    return filteredData;
  }
  
  export function getCountryById(id) {
    return data.find((event) => event.id === id);
  }
  