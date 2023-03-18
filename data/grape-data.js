const GRAPES_DATA = [
  {
    id: "cabernet-sauvignon",
    itemName: "Cabernet Sauvignon",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Cabernet_Sauvignon",
    isFeaured: "FALSE",
  },
  {
    id: "merlot",
    itemName: "Merlot",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Merlot",
    isFeaured: "FALSE",
  },
  {
    id: "tempranillo",
    itemName: "Tempranillo",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Tempranillo",
    isFeaured: "FALSE",
  },
  {
    id: "airén",
    itemName: "Airén",
    category: "W",
    altNames: "['Airen']",
    link: "https://en.wikipedia.org/wiki/Air%C3%A9n",
    isFeaured: "FALSE",
  },
  {
    id: "chardonnay",
    itemName: "Chardonnay",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Chardonnay",
    isFeaured: "FALSE",
  },
  {
    id: "syrah",
    itemName: "Syrah",
    category: "R",
    altNames: "['Shiraz']",
    link: "https://en.wikipedia.org/wiki/Syrah",
    isFeaured: "FALSE",
  },
  {
    id: "garnacha-tinta",
    itemName: "Garnacha Tinta",
    category: "R",
    altNames: "['Grenache']",
    link: "https://en.wikipedia.org/wiki/Grenache",
    isFeaured: "FALSE",
  },
  {
    id: "sauvignon-blanc",
    itemName: "Sauvignon Blanc",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Sauvignon_blanc",
    isFeaured: "FALSE",
  },
  {
    id: "trebbiano-toscano",
    itemName: "Trebbiano Toscano",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Trebbiano_Toscano",
    isFeaured: "FALSE",
  },
  {
    id: "pinot-noir",
    itemName: "Pinot Noir",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Pinot_noir",
    isFeaured: "FALSE",
  },
  {
    id: "sangiovese",
    itemName: "Sangiovese",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Sangiovese",
    isFeaured: "FALSE",
  },
  {
    id: "riesling",
    itemName: "Riesling",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Riesling",
    isFeaured: "FALSE",
  },
  {
    id: "bobal",
    itemName: "Bobal",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Bobal",
    isFeaured: "FALSE",
  },
  {
    id: "cabernet-franc",
    itemName: "Cabernet Franc",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Cabernet_Franc",
    isFeaured: "FALSE",
  },
  {
    id: "côt",
    itemName: "Côt",
    category: "R",
    altNames: "['Malbec']",
    link: "https://en.wikipedia.org/wiki/Cot_(grape)",
    isFeaured: "FALSE",
  },
  {
    id: "monastrell",
    itemName: "Monastrell",
    category: "R",
    altNames: "['Mourvedre', 'Mourvèdre', 'Monastrell', 'Mourvèdre']",
    link: "https://en.wikipedia.org/wiki/Monastrell",
    isFeaured: "FALSE",
  },
  {
    id: "rkatsiteli",
    itemName: "Rkatsiteli",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Rkatsiteli",
    isFeaured: "FALSE",
  },
  {
    id: "pinot-gris",
    itemName: "Pinot Gris",
    category: "G",
    altNames: "['Pinot Grigio']",
    link: "https://en.wikipedia.org/wiki/Pinot_gris",
    isFeaured: "FALSE",
  },
  {
    id: "mazuelo",
    itemName: "Mazuelo",
    category: "R",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Mazuelo",
    isFeaured: "FALSE",
  },
  {
    id: "macabeo",
    itemName: "Macabeo",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Macabeo",
    isFeaured: "FALSE",
  },
  {
    id: "cayetana-blanca",
    itemName: "Cayetana Blanca",
    category: "W",
    altNames: "[]",
    link: "https://en.wikipedia.org/wiki/Cayetana_Blanca",
    isFeaured: "FALSE",
  },
];

export function getFeaturedGrapes() {
  return GRAPES_DATA.filter((event) => event.isFeatured);
}

export function getAllGrapes() {
  return GRAPES_DATA;
}

export function getFilteredGrapes(dateFilter) {
  const { year, month } = dateFilter;

  let filteredGrapes = GRAPES_DATA.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredGrapes;
}

export function getEventById(id) {
  return GRAPES_DATA.find((event) => event.id === id);
}
