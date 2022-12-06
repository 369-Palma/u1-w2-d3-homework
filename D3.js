/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numA = 4;
let numB = 15;
if (numA > numB) {
  console.log("il numero più grande è", numA);
} else {
  console.log("il numero più grande è:", numB);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 7;
if (num !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 2;
if (20 % 5 == 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 3;

if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8) {
  console.log("condizione verificata");
}
/* Altrimenti 
if (n1 === 8) {
  console.log("condizione verificata");
} else if (n2 === 8) {
  console.log("condizione verificata");
} else if (n1 + n2 === 8) {
  console.log("condizione verificata");
} else if (n1 - n2 === 8) {
  console.log("condizione verificata");
} else {
  console.log("NON verificato");
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let totalShoppingCart = 15;
const spedizione = 10;
let checkout;
if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita");
} else {
  checkout = totalShoppingCart + spedizione;
}
console.log(checkout); */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart = 100;
let bonus = (totalShoppingCart - 20 / 100) * totalShoppingCart;
const spedizione = 10;
let checkout;
if (bonus > 50) {
  console.log("Spedizione gratuita");
} else {
  checkout = totalShoppingCart + spedizione;
}
console.log(checkout);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 3;
let y = 36;
let z = 12;
let primo;
let secondo;
let terzo;
if (x > y && x > z) {
  primo = x;
} else if (z > x && z > y) {
  primo = z;
} else if (y > x && y > z) {
  primo = y;
}

if (x < y && x < z) {
  terzo = x;
} else if (z < x && z < y) {
  terzo = z;
} else if (y < x && y < z) {
  terzo = y;
}

if (x !== primo && x !== terzo) {
  secondo = x;
} else if (z !== primo && z !== terzo) {
  secondo = x;
} else if (y !== primo && y !== terzo) {
  secondo = y;
}
console.log(primo, secondo, terzo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 47;
if (valore === typeof Number) {
  console.log("verificato");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let valore=5
if(if===0){console.log("valore è 0")} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills;
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array[]
array.push=(1,2,3,4,5,6,7,8,9,,10)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[9]=100
console.log(array)
/* SCRIVI QUI LA TUA RISPOSTA */
