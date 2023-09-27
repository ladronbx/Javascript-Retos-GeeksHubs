// 2. Crea una aplicación que nos genere una cantidad de 
// números enteros aleatorios pasados
// por el usuario (prompt). 


//Crea un método donde : pasamos 
// como parámetros entre entre qué
// números queremos que los genere, podemos pedirlas al usuario 
// antes de generar los
// números. Este método devolverá un número entero aleatorio. 
// Muestra estos números por
// consola.


// FLUJO
// 1. Pide al usuario que ingrese dos números: 
// el número más bajo del rango y el número más alto del rango.


// 2. Pide al usuario que ingrese la CANTIDAD 
// de números enteros aleatorios que desea generar.

// 3. Crea una función que acepte estos dos números 
// como parámetros y la cantidad de números aleatorios a generar.

// 4. Dentro de la función, un bucle para generar 
// la cantidad de números aleatorios especificada.

function generateRandomNumbers(since, to, amount) {
    const randomNumbers = [];
  
    for (let i = 0; i < amount; i++) {
      const randomNumber = Math.floor(Math.random() * (to - since + 1)) + since;
      randomNumbers.push(randomNumber);
    }
  
    return randomNumbers;
  }
// alert('A continuación, escribe un rango de números:');
// const since = parseInt(prompt('Dime el primer número: ')); 
// const to = parseInt(prompt('Dime el segundo número: '));

// const amount = parseInt(prompt('Dime la cantidad de números: '));

  const since = 1;
  const to = 10;
  const amount = 4;
  
  const randomNumbers = generateRandomNumbers(since, to, amount);
  console.log(randomNumbers);
  

//   Math.random() devuelve un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo) por eso se multiplica