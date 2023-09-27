
// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
// (recuerda pasar de String a double con parseDouble). Usa la constante PI.


//"parseDouble"???? Es Java. No JavaScript. Usaré pues "parseFloat"

let radio = parseFloat(prompt("Inserta el radio del círculo:"));


if (isNaN(radio)) {

    alert("El valor ingresado no es válido. Por favor, ingresa un número válido.");


} else {

    let area = Math.PI * Math.pow(radio, 2);

    alert(`El área del círculo con radio ${radio} es: ${area.toFixed(2)}`);

}



//Math.pow ->  Se utiliza para elevar un número a una potencia específica (radio * radio)