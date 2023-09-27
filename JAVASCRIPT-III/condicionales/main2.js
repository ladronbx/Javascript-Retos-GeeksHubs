// 2. Pedir dos números y decir cual es el mayor.

const x = parseInt(prompt("Por favor, ingresa el primer número:"));
const y = parseInt(prompt("Por favor, ingresa el segundo número:"));


if (x < y) {
    console.log(`${x} es menor a ${y}`);
} else if(x === y){
    console.log(`${x} y ${y} son iguales`);

} else {
    console.log(`${x} es mayor a ${y}`);
}