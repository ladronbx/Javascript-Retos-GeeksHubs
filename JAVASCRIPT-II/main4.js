// 4. Crea una aplicación que nos calcule el factorial 
// de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número 
// como parámetro. 

//Para calcular el factorial,
//  se multiplica los números anteriores hasta 
// llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.


let resultado = 1;
function factorial(x) {
  for(let i = x; i >= 1; i-- ){
    resultado *= i;
  }
  return resultado;

}

let x = parseInt(prompt('Dime un número y calcularé su factorial: '));
console.log(`El factorial de ${x} es ${factorial(x)}`);
