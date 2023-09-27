// 3. Crea una aplicación que nos pida un número por prompt 
// y con una función se lo pasamos
// por parámetro para que nos indique si es o no un número primo, 
// debe devolver true si es
// primo sino false. Un número primo es aquel que solo puede 
// dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, 
// sin embargo, 17 si es primo.


let x = parseInt(prompt('Dime un número y te diré si es primo o no: '));

function primo(x) {
    if (x <= 1) {
        console.log('No es primo');
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                console.log('No es primo');
                break; // Agregamos un break para salir del bucle
            }
        }
        console.log('Es primo');
    }
}

primo(x);


// ¿Por qué el bucle for?
// Comenzamos con i = 2, que es el número más pequeño que tiene 
// sentido verificar como divisor, ya que cualquier número 
// divisible por 1 es divisible por sí mismo.

// Luego, en cada iteración del bucle, verificamos si x es 
// divisible por i utilizando el operador % (módulo). 
// Si x es divisible por i, significa que x no es un número primo, 
// ya que tiene al menos un divisor distinto de 1 y x 
// (un divisor distinto de sí mismo).

// Si encontramos un divisor, imprimimos "No es primo" y 
// salimos de la función utilizando return. No necesitamos 
// seguir verificando más números después de encontrar un divisor, 
// ya que eso confirmaría que el número no es primo.

// Si el bucle se ejecuta completamente sin encontrar ningún 
// divisor (es decir, llegamos a i = x sin encontrar un divisor), 
// entonces x se considera primo y se imprime "Es primo".