// 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
// aritmético (String), según este último se realizará la operación correspondiente. Al final
// mostrará el resultado en un cuadro de diálogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)




// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.



let x = parseInt(prompt("Inserta el primer número"));
let y = parseInt(prompt("Inserta el segundo número"));



let signo = prompt("Inserta un signo para operar");

let resultado;

function suma(x, y){
    resultado = x + y;
    return resultado;
}

function resta(x, y){
    resultado = x - y;
    return resultado;
}

function multiplica(x, y){
    resultado = x * y;
    return resultado;
}

function divide(x, y){
    resultado = x / y;
    return resultado;
}

function exponente(x, y){
    resultado = Math.exp(x, y);
    return resultado;
}

function modulo(x, y){
    resultado = x%y;
    return resultado;
}

switch(signo){
    case "+":
        alert(suma(x, y));
    break;
    case "-":
        alert(resta(x, y));
    break;
    case "*":
        alert(multiplica(x, y));
    break;
    case "/":
        alert(divide(x, y));
    break;
    case "^":
        alert(exponente(x, y));
    break;
    case "%":
        alert(modulo(x, y));
    break;
}