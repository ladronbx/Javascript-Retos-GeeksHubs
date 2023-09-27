// 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
// números y determinar si el promedio es mayor que cinco.

const a = parseInt(prompt("Por favor, ingresa el primer número:"));
const b = parseInt(prompt("Por favor, ingresa el segundo número:"));
const c = parseInt(prompt("Por favor, ingresa el tercero número:"));

let result;

const promedio = (a, b, c) => {
    result = (a + b + c) / 3;
    return console.log(result);
}

promedio(a, b, c);