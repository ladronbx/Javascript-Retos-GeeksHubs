// 4. Crea una aplicación que nos calcule el factorial 
// de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número 
// como parámetro. 

//Para calcular el factorial,
//  se multiplica los números anteriores hasta 
// llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.

// let x = parseInt(prompt('Dime un número y se calculará el factorial: '));

let x = 5;

function factorial(x) {
  let resultado = 1;
  for (let i = x; i > 0; i--) {
    console.log(resultado);
    resultado *= i;
  }

  return resultado;
}

//   let x = parseInt(prompt('Dime un número y calcularé su factorial: '));
let resultadoFactorial = factorial(x);
console.log(`El factorial de ${x} es ${resultadoFactorial}`);
