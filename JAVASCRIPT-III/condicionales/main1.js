// 1. Pedir dos números y decir si son múltiplos o no.


const x = parseInt(prompt("Por favor, ingresa el primer número:"));
const y = parseInt(prompt("Por favor, ingresa el segundo número:"));


if (x % y === 0) {
  console.log(`${x} es múltiplo de ${y}`);
} else if (y % x === 0) {
  console.log(`${y} es múltiplo de ${x}`);
} else {
  console.log(`${x} y ${y} no son múltiplos entre sí`);
}
