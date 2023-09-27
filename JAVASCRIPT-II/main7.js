// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.

// La tasa de cambio :
// • 0.86L es un 1 €
// • 1.28611$ es un 1 €
// • 129.852Y es un 1 €


let cantidad; // Esto lo indicará el usuario
let moneda;  // Esto lo indicará el usuario

const libra = 'libra';  // Cambiamos a cadenas
const dolar = 'dolar';  // Cambiamos a cadenas
const yen = 'yen';      // Cambiamos a cadenas
let result;

const calculator = (cantidad, moneda) => {
    if (moneda === libra) {
        result = cantidad * 0.86;
        return console.log(result);
    } else if (moneda === yen) {
        result = cantidad * 129.852;
        return console.log(result);
    } else if (moneda === dolar) {
        result = cantidad * 1.28611;
        return console.log(result);
    } else {
        console.log('No calculo esa moneda');
    }
}

calculator(2, 'libra');

