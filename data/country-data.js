const DUMMY_COUNTRIES = [
 {
   id: "italy",
   itemName: "Italy",
   category: "OW",
   regions: [  "Piedmont",  "Tuscany",  "Veneto",  "Lombardy",  "Sicily",  "Apulia",  "Friuli-Venezia Giulia",  "Emilia-Romagna",  "Campania",  "Lazio"],
   link: "https://en.wikipedia.org/wiki/Italian_wine",
   isFeatured: false
 },
 {
   id: "australia",
   itemName: "Australia",
   category: "NW",
   regions: [  "Barossa Valley",  "Hunter Valley",  "Margaret River",  "McLaren Vale",  "Yarra Valley",  "Coonawarra",  "Clare Valley",  "Adelaide Hills",  "Swan Valley",  "Langhorne Creek"],
   link: "https://en.wikipedia.org/wiki/Australian_wine",
   isFeatured: false
 },
 {
   id: "spain",
   itemName: "Spain",
   category: "OW",
   regions: [  "Rioja",  "Ribera del Duero",  "Priorat",  "Catalonia",  "La Mancha",  "Rueda",  "Valdepeñas",  "Jerez-Xérès-Sherry",  "Navarra",  "Penedès"],
   link: "https://en.wikipedia.org/wiki/Spanish_wine",
   isFeatured: false
 },
 {
   id: "france",
   itemName: "France",
   category: "OW",
   regions: [  "Bordeaux",  "Burgundy",  "Champagne",  "Loire Valley",  "Alsace",  "Rhone Valley",  "Languedoc-Roussillon",  "Provence",  "Jura",  "Savoie"],
   link: "https://en.wikipedia.org/wiki/French_wine",
   isFeatured: false
 },
 {
   id: "chile",
   itemName: "Chile",
   category: "NW",
   regions: [  "Maipo Valley",  "Casablanca Valley",  "Colchagua Valley",  "Aconcagua Valley",  "Limarí Valley",  "Cachapoal Valley",  "Curicó Valley",  "Elqui Valley",  "San Antonio Valley",  "Itata Valley"],
   link: "https://en.wikipedia.org/wiki/Chilean_wine",
   isFeatured: false
 },
 {
   id: "argentina",
   itemName: "Argentina",
   category: "NW",
   regions: [  "Mendoza",  "Salta",  "San Juan",  "La Rioja",  "Neuquén",  "Rio Negro",  "Catamarca",  "San Luis",  "La Pampa",  "Buenos Aires"],
   link: "https://en.wikipedia.org/wiki/Argentine_wine",
   isFeatured: false
 },
 {
   id: "south-africa",
   itemName: "South Africa",
   category: "NW",
   regions: [  "Stellenbosch",  "Franschhoek",  "Paarl",  "Swartland",  "Walker Bay",  "Robertson",  "Breede River Valley",  "Constantia",  "Tulbagh",  "Olifants River"],
   link: "https://en.wikipedia.org/wiki/South_African_wine",
   isFeatured: false
 },
 {
   id: "germany",
   itemName: "Germany",
   category: "OW",
   regions: [  "Mosel",  "Rheingau",  "Rheinhessen",  "Pfalz",  "Baden",  "Nahe",  "Ahr",  "Mittelrhein",  "Württemberg",  "Hessische Bergstraße"],
   link: "https://en.wikipedia.org/wiki/German_wine",
   isFeatured: false
 },
 {
   id: "united-states",
   itemName: "United States",
   category: "NW",
   regions: [  "Napa Valley",  "Sonoma County",  "Willamette Valley",  "Central Coast",  "Columbia Valley",  "Santa Barbara County",  "Finger Lakes",  "Long Island",  "Paso Robles",  "Russian River Valley"],
   link: "https://en.wikipedia.org/wiki/American_wine",
   isFeatured: false
 },
 {
   id: "portugal",
   itemName: "Portugal",
   category: "OW",
   regions: [  "Douro",  "Alentejo",  "Vinho Verde",  "Bairrada",  "Dão",  "Portuguese Island wines",  "Lisboa",  "Madeira",  "Setúbal Peninsula",  "Trás-os-Montes"],
   link: "https://en.wikipedia.org/wiki/Portuguese_wine",
   isFeatured: false
 },
 {
   id: "china",
   itemName: "China",
   category: "NW",
   regions: ["Ningxia"],
   link: "https://en.wikipedia.org/wiki/Chinese_wine",
   isFeatured: false
 }
]
    
    export function getFeaturedCountries() {
      return DUMMY_COUNTRIES.filter((event) => event.isFeatured);
    }
    
    export function getAllCountries() {
      return DUMMY_COUNTRIES;
    }
    
    export function getFilteredCountries(dateFilter) {
      const { year, month } = dateFilter;
    
      let filteredCountries = DUMMY_COUNTRIES.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
      });
    
      return filteredCountries;
    }
    
    export function getEventById(id) {
      return DUMMY_COUNTRIES.find((event) => event.id === id);
    }