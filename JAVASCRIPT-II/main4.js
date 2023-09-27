// 4. Crea una aplicación que nos calcule el factorial 
// de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número 
// como parámetro. 

//Para calcular el factorial,
//  se multiplica los números anteriores hasta 
// llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.


// // let x = parseInt(prompt('Dime un número y calcularé su factorial: '));
let x = 5;
let result = 1;

const calculator = (x) => {
  if (x <= 1) {
    return console.log('El número indicado no tiene factorial.');
  } else {
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    console.log('El factorial de ' + x + ' es ' + result);
  }
};

calculator(x);