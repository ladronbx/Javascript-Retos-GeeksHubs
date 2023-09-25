const letrasNIF = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

let numero = parseInt(prompt('Dime tu dni sin la letra : '));

let comprobacion = numero % 23;

let resultado = letrasNIF[comprobacion];


let result = () => {
    return console.log(numero + resultado);

}

result();


 
