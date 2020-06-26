// Ex.ID 3 - Largest Prime Number JS

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Il fattore più grande è l'ultimo restante, una volta diviso il numero per tutti quelli più piccoli (ma va?).

// Dichiarazione variabili
var number = 600851475143;
var reduced;
// Procedo a 3 step, defattorizzando il numero.
// Cerco fattori da 0 a 1k:
for (var i = 0; i < 1000; i++) {
  if ((number%i) == 0) {
    reduced = (number/i);
    console.log(i, reduced); // (Fattore più alto trovato in [0-1k]: 839, Numero ridotto dai fattori in [0-1k]: 716151937)
  }
}
// Ora prendo il numero ridotta (che ha perso i fattori contenuti nel range 1-1k) e ricerco nuovi fattori fra 1k e 10k:
var number2 = 716151937;
var reduced2;

for (var i = 1000; i < 10000; i++) {
  if ((number2%i) == 0) {
    reduced2 = (number2/i);
    console.log(i, reduced2); // (Fattore più alto trovato in [1k-10k]: 6857, Numero ridotto dai fattori in [1k-10k]: 104441)
  }
}
// Il numero si è ridotto ancora, è ora a 6 cifre. Faccio un'ultima ricerca da 10k fino al numero stesso:
var number3 = 104441;
var reduced3;

for (var i = 10000; i < 104441; i++) {
  if ((number3%i) == 0) {
    reduced3 = (number3/i);
    console.log(i, reduced3); // (Fattore più alto trovato in [10k-104441]: 71, Numero ridotto dai fattori in [10k-104441]: 1471)
  }
}
// Il fattore più grande del numero 600851475143 è quindi: 6857!
