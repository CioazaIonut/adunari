// Adunarea a două numere:

function aduna(num1, num2) {
  return num1 + num2;
}
console.log(aduna(5, 3));

// Adunarea a mai multor numere într-un array:

function adunaArray(numere) {
  return numere.reduce((total, num) => total + num, 0);
}
console.log(adunaArray([1, 2, 3, 4]));

// Adunarea numerelor de la 1 la N:

function adunaPanaLaN(N) {
  let suma = 0;
  for (let i = 1; i <= N; i++) {
    suma += i;
  }
  return suma;
}
console.log(adunaPanaLaN(5));

// Adunarea a două numere cu validare:

function adunaCuValidare(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Te rog introduci doar numere.";
  }
  return num1 + num2;
}
console.log(adunaCuValidare(10, "a"));

// Adunarea a două numere introduse de utilizator:

function adunaInput() {
  let num1 = parseFloat(prompt("Introdu primul număr:"));
  let num2 = parseFloat(prompt("Introdu al doilea număr:"));
  return aduna(num1, num2);
}
console.log(adunaInput());

// Adunarea elementelor unei matrice:

function adunaMatrice(matrice) {
  let suma = 0;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      suma += matrice[i][j];
    }
  }
  return suma;
}
console.log(
  adunaMatrice([
    [1, 2],
    [3, 4],
  ])
);

// Adunarea numerelor pare dintr-un interval:

function adunaNumerePare(start, end) {
  let suma = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  return suma;
}
console.log(adunaNumerePare(1, 10));

// Adunarea numerelor dintr-un string:

function adunaNumereString(input) {
  return input
    .split("+")
    .map(Number)
    .reduce((total, num) => total + num, 0);
}
console.log(adunaNumereString("1+2+3+4"));
