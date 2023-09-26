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


// 2. Pide al usuario que ingrese la cantidad 
// de números enteros aleatorios que desea generar.

// 3. Crea una función que acepte estos dos números 
// como parámetros y la cantidad de números aleatorios a generar.

// 4. Dentro de la función, utiliza un bucle para generar 
// la cantidad de números aleatorios especificada. Para 
// cada número aleatorio, utiliza una función o método 
// para obtener un número aleatorio entre el número más 
// bajo y el número más alto del rango (inclusivos).

// 5. Muestra estos números enteros aleatorios por consola.

alert('A continuación, escribe un rango de números:');
let numero1 = parseInt(prompt('Dime el primer número: ')); 
let numero2 = parseInt(prompt('Dime el segundo número: '));

let cantidad = parseInt(prompt('Dime la cantidad de números: '));

function generarNumeroAleatorio(numero1, numero2) {
    // Genera un número aleatorio 
    const numeroAleatorio = Math.random();
    
    // Ajusta el número aleatorio al rango deseado (min y max). Math.floor redondea
    const numeroEnRango = numero1 + Math.floor(numeroAleatorio * (numero2 - numero1 + 1));
    
    return numeroEnRango;
}

for (let i = 0; i < cantidad; i++) {
    console.log(generarNumeroAleatorio(numero1, numero2));
}


