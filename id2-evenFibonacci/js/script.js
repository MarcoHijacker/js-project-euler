// Ex.ID 2 - Even Fibonacci Numbers JS

// Dichiarazione array Fibonacci e inizializzazione valori
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 2;
// Riempio un array con 4mln di valori della serie
for (var i = 3; i < 4000000; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

var sum = 0;
// Controllo se il valore della serie è > 4mln e se è pari, dunque aggiungo a sum
for (var i = 0; i < fibonacci.length; i++) {
  if(fibonacci[i] < 4000000 && fibonacci[i]%2 == 0) {
    sum += fibonacci[i];
  }
}
// Somma dei termini pari della serie di Fibonacci fino al termine subito precedente a 4mln
console.log(sum);
