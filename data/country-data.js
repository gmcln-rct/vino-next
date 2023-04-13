export const COUNTRIES_DATA = [
  {
    id: "argentina",
    itemName: "Argentina",
    category: "NW",
    dataType: "country",
    regions: [
      "Mendoza",
      "Salta",
      "San Juan",
      "La Rioja",
      "Neuquén",
      "Rio Negro",
      "Catamarca",
      "San Luis",
      "La Pampa",
      "Buenos Aires",
    ],
    link: "https://en.wikipedia.org/wiki/Argentine_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },

  {
    id: "australia",
    itemName: "Australia",
    category: "NW",
    dataType: "country",
    regions: [
      "Barossa Valley",
      "Hunter Valley",
      "Margaret River",
      "McLaren Vale",
      "Yarra Valley",
      "Coonawarra",
      "Clare Valley",
      "Adelaide Hills",
      "Swan Valley",
      "Langhorne Creek",
    ],
    link: "https://en.wikipedia.org/wiki/Australian_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: true,
    isTop: true,
  },
  {
    id: "chile",
    itemName: "Chile",
    category: "NW",
    dataType: "country",
    regions: [
      "Maipo Valley",
      "Casablanca Valley",
      "Colchagua Valley",
      "Aconcagua Valley",
      "Limarí Valley",
      "Cachapoal Valley",
      "Curicó Valley",
      "Elqui Valley",
      "San Antonio Valley",
      "Itata Valley",
    ],
    link: "https://en.wikipedia.org/wiki/Chilean_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },

  {
    id: "france",
    itemName: "France",
    category: "OW",
    dataType: "country",
    regions: [
      "Bordeaux",
      "Burgundy",
      "Champagne",
      "Loire Valley",
      "Alsace",
      "Rhone Valley",
      "Languedoc-Roussillon",
      "Provence",
      "Jura",
      "Savoie",
    ],
    link: "https://en.wikipedia.org/wiki/French_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },
  {
    id: "germany",
    itemName: "Germany",
    category: "OW",
    dataType: "country",
    regions: [
      "Mosel",
      "Rheingau",
      "Rheinhessen",
      "Pfalz",
      "Baden",
      "Nahe",
      "Ahr",
      "Mittelrhein",
      "Württemberg",
      "Hessische Bergstraße",
    ],
    link: "https://en.wikipedia.org/wiki/German_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },
  {
    id: "italy",
    itemName: "Italy",
    category: "OW",
    dataType: "country",
    regions: [
      "Piedmont",
      "Tuscany",
      "Veneto",
      "Lombardy",
      "Sicily",
      "Apulia",
      "Friuli-Venezia Giulia",
      "Emilia-Romagna",
      "Campania",
      "Lazio",
    ],
    link: "https://en.wikipedia.org/wiki/Italian_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: true,
    isTop: true,
  },

  {
    id: "portugal",
    itemName: "Portugal",
    category: "OW",
    dataType: "country",
    regions: [
      "Douro",
      "Alentejo",
      "Vinho Verde",
      "Bairrada",
      "Dão",
      "Portuguese Island wines",
      "Lisboa",
      "Madeira",
      "Setúbal Peninsula",
      "Trás-os-Montes",
    ],
    link: "https://en.wikipedia.org/wiki/Portuguese_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },
  {
    id: "south-africa",
    itemName: "South Africa",
    category: "NW",
    dataType: "country",
    regions: [
      "Stellenbosch",
      "Franschhoek",
      "Paarl",
      "Swartland",
      "Walker Bay",
      "Robertson",
      "Breede River Valley",
      "Constantia",
      "Tulbagh",
      "Olifants River",
    ],
    link: "https://en.wikipedia.org/wiki/South_African_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },
  {
    id: "spain",
    itemName: "Spain",
    category: "OW",
    dataType: "country",
    regions: [
      "Rioja",
      "Ribera del Duero",
      "Priorat",
      "Catalonia",
      "La Mancha",
      "Rueda",
      "Valdepeñas",
      "Jerez-Xérès-Sherry",
      "Navarra",
      "Penedès",
    ],
    link: "https://en.wikipedia.org/wiki/Spanish_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: true,
    isTop: true,
  },

  {
    id: "united-states",
    itemName: "United States",
    category: "NW",
    dataType: "country",
    regions: [
      "Napa Valley",
      "Sonoma County",
      "Willamette Valley",
      "Central Coast",
      "Columbia Valley",
      "Santa Barbara County",
      "Finger Lakes",
      "Long Island",
      "Paso Robles",
      "Russian River Valley",
    ],
    link: "https://en.wikipedia.org/wiki/American_wine",
    indexImageLink: "/images/site-images/index-images/grape-sm-rkatsiteli.jpg",
    isFeatured: false,
    isTop: true,
  },
];

// export function getFeaturedCountries() {
//   return COUNTRIES_DATA.filter((event) => event.isFeatured);
// }

// export function getAllCountries() {
//   return COUNTRIES_DATA;
// }

// export function getFilteredCountries(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredCountries = COUNTRIES_DATA.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredCountries;
// }

// export function getCountryById(id) {
//   return COUNTRIES_DATA.find((event) => event.id === id);
// }
