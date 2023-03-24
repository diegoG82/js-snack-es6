// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// CREO ARRAY DI BICI CON OGGETTO E PESO

const cyclingBikes = [
  {
    Model: "trekEmonda",

    weight: 7,
  },

  {
    Model: "specializedTarmac",

    weight: 8,
  },

  {
    Model: "banchiSpecialissima",

    weight: 6,
  },
  {
    Model: "canyonAeroad",

    weight: 5,
  },

  {
    Model: "pinarelloDogma",

    weight: 9,
  },
];

console.log(cyclingBikes);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// CREO UNA VARIABILE CHE VADA AD ALIMENTARE L'ARRAY DELLE BICI LEGGERE

let lowWeightBikes = cyclingBikes[0];

// APRO IL CICLO FOR PER SCORRERE I PESI E FILTRARE LA BICI PIU' LEGGERA.

for (i = 0; i < cyclingBikes.length; i++) {
  let bikes = cyclingBikes[i];
  if (lowWeightBikes["weight"] > bikes["weight"]) {
    lowWeightBikes = bikes;
  }
}

console.log(lowWeightBikes);

// STAMPO LA BICI A SCHERMO CON TEMPLATE LITERAL

// Prelevo il contenitore dove inserisco il mio controllo

let lowbike = document.getElementById("lowbike");

lowbike.innerHTML = `Il modello ${lowWeightBikes.Model} con il peso di ${lowWeightBikes.weight} kg è il modello piu' leggero`
