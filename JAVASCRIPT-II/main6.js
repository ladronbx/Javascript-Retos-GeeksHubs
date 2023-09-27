// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
// el número por parámetro devolverá el número de cifras.

// Flujo:
// 1. Debe contar el número de cifras de un número entero positivo



let x = 12345;
let number;

const calculator = (x) => {
    let string = x.toString();
    return console.log(string.length);
};
calculator(x);
