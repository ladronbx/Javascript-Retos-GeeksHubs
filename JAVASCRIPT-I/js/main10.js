// 10. Realiza una aplicación que nos pida un número 
// de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número 
// de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa 
// que es lo que se repite y lo que no.

let iteraciones = parseInt(prompt("Inserta un número de ventas:"));

let resultadoSuma = 0;


if (!isNaN(iteraciones) && iteraciones > 0) {
    let resultadoSuma = 0;
    
    for (let i = 1; i <= iteraciones; i++) {
      let venta = parseFloat(prompt(`Ingresa la venta ${i}:`));
      resultadoSuma += venta;
    }

    alert(`La suma de todas las ventas es: ${resultadoSuma.toFixed(2)}`);

  } else {

    alert("El número de ventas ingresado no es válido. Por favor, ingresa un número positivo.");
  }
  









// if ((!isNaN(iteraciones)) && (iteraciones > 0)) {
   
//     for (let i = 1; i <= iteraciones; i++) {
//       let venta = parseFloat(prompt(`Ingresa la venta ${i}:`));
      
//       if (!isNaN(venta)) {
//         sumaVentas += venta;
//       } else {
//         alert("La entrada no es un número válido. Por favor, ingresa un número.");
//         i--;
//       }
//     }

//     alert(`La suma de todas las ventas es: ${sumaVentas.toFixed(2)}`);
//   } else {
//     alert("El número de ventas ingresado no es válido. Por favor, ingresa un número positivo.");
//   }
