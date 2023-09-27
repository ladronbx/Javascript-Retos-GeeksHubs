// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

const numero = parseFloat(prompt("Por favor, ingresa un número:"));

if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else {
  console.log("El número ingresado es igual a cero.");
}
