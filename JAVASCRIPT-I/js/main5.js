// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// debemos indicarlo.

let number = parseInt(prompt("Inserta un número:"));


if(number % 2 === 0){
    alert('El resto es 0 por lo que sí es divisible entre 2')
}else{
    alert('No es divisible entre 2')
}