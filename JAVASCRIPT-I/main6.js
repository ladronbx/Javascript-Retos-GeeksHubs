// 6. Lee un número por teclado que pida el precio de
//  un producto (puede tener decimales) y
// calcule el precio final con IVA. 
// El IVA será una constante que sera del 21%

let precio = parseFloat(prompt("Inserta el precio sin iva:"));

const iva = 21;

let resultado = ((precio*21) / 100) + precio;

alert(`El resultado es ${resultado}`);