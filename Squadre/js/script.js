// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadreCalcio = [
  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Roma",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Lazio",
    punti: 0,
    falli: 0,
  },
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

// Ciclo le squadre calcolando i punti ed i falli in modo random

for (let i = 0; i < squadreCalcio.length; i++) {
  squadreCalcio[i].punti = Math.floor(Math.random() * 100);
  squadreCalcio[i].falli = Math.floor(Math.random() * 200);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const risultati = squadreCalcio.map(({ nome, falli }) => ({ nome, falli }));

console.log(risultati);



