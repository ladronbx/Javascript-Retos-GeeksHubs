// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// rellenar valores y otro para mostrar.


let array = [];
let totalIterations = 10;
let index = 0;

const pushArray = () => {
    while (index < totalIterations) {
        index++;
        let element = parseInt(prompt(`Ingrese un número:`));
        array.push(element);
    }
    return array;
}

const mostrarArray = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i+1}: Valor ${array[i]}`);
    }
    console.log(`El array completo es ${array}`);
}

pushArray();
mostrarArray();
