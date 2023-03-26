

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const diegoArray = [0, 1, 2, 3, 4, 5, 10, 20, 30];
const myArrayFiltered = filterArray(diegoArray, 2, 10);
console.log(myArrayFiltered);

// Funzione che filtra i numeri dell'index  compresi tra i due.
function filterArray(myArray, val1, val2) {
  return myArray.filter((index, _value) => index >= val1 && index <= val2);
}
