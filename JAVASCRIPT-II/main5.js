// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un String
// con el número convertido a binario. Para convertir un número decimal a binario, debemos
// dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
// no se pueda dividir más, el resto que obtengamos de cada división formará el número
// binario, de abajo a arriba.

function decimalABinario(x) {
    if (x === 0) {
      return "0";
    }
  
    let binario = "";
    while (x > 0) {
      let resto = x % 2;
      binario = resto + binario;
      x = Math.floor(x / 2); // Actualiza x dividiéndolo por 2 (descartando decimales)
    }
  
    return binario;
  }
  
  let x = 3;
  console.log(decimalABinario(x)); // Debería mostrar "11"
  
