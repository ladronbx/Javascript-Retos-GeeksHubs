// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
// rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
// y otro para mostrar el contenido y la suma del array.

// Función para rellenar el array con números aleatorios entre un rango especificado
const llenarArrayAleatorio = (tamaño, min, max) => {
    const array = [];
    for (let i = 0; i < tamaño; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(numeroAleatorio);
    }
    return array;
}

// Función para mostrar el contenido y la suma del array
const mostrarArrayYSuma = (array) => {
    console.log("Contenido del array:");
    for (let i = 0; i < array.length; i++) {
        console.log(`Posición ${i}: ${array[i]}`);
    }
    const suma = array.reduce((total, numero) => total + numero, 0);
    console.log(`Suma de todos los valores: ${suma}`);
}

// Pedir al usuario el tamaño del array
const tamañoArray = parseInt(prompt("Ingrese el tamaño del array:"));

// Llenar el array con números aleatorios entre 0 y 9
const minimo = 0;
const maximo = 9;
const arrayGenerado = llenarArrayAleatorio(tamañoArray, minimo, maximo);

// Mostrar el contenido y la suma del array
mostrarArrayYSuma(arrayGenerado);
