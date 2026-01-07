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
