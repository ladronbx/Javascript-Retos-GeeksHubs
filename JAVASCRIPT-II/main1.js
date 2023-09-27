// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado



//funciones : 
//     área círculo -> (radio^2)*PI
//     cuadrado -> lado * lado
//     triángulo -> (base * altura) / 2

//FLUJO
//     prompt('Fgura?') ..... y según figura preguntará diferente prompts
// Mostrar resultado por console.log()


// ********  CON IF  ********

// let figura = prompt('Dime una figura : ');

// function calculoCirculo (radio){
//     let resultadoCirculo = (radio ** 2)*Math.PI;
//     console.log(resultadoCirculo);

// };

// function calculoCuadrado (lado){
//     let resultadoCuadrado = lado * lado;
//     console.log(resultadoCuadrado);

// };

//     function calculoTriángulo (base, altura){
//         let resultadoTriángulo = (base * altura) / 2;
//     console.log(resultadoTriángulo);

// };




// if(figura === 'círculo'){
//     console.log('Cálculo círculo')
//     let radio = parseInt(prompt('Dime un número el cual será el radio para realizar el cálculo : '));
//     calculoCirculo(radio);

    

// }else if(figura === 'cuadrado'){
//     console.log('Cálculo cuadrado')
//     let lado = parseInt(prompt('Dime un número el cual será el lado para realizar el cálculo : '));
//     calculoCuadrado(lado);



// }else if(figura === 'triángulo'){
//     console.log('Cálculo triángulo')
//     let base = parseInt(prompt('Dime un número el cual será la base para realizar el cálculo : '));
//     let altura = parseInt(prompt('Dime un número el cual será la latura para realizar el cálculo : '));
//     calculoTriángulo(base, altura);




// }else{
//     console.log('No has introducido una figura correcta.')
// }



//********  CON SWITCH  ********
let figura = prompt('Dime una figura : ');

const calculoCirculo = (radio) => {
    let resultadoCirculo = (radio ** 2)*Math.PI;
    console.log(resultadoCirculo);

};

function calculoCuadrado (lado){
    let resultadoCuadrado = lado * lado;
    console.log(resultadoCuadrado);

};

function calculoTriángulo (base, altura){
        let resultadoTriángulo = (base * altura) / 2;
    console.log(resultadoTriángulo);

};

switch(figura){
    case 'círculo' :
        console.log('Cálculo círculo')
        let radio = parseInt(prompt('Dime un número el cual será el radio para realizar el cálculo : '));
        calculoCirculo(radio);
    break;
    case 'cuadrado' :
        console.log('Cálculo cuadrado')
        let lado = parseInt(prompt('Dime un número el cual será el lado para realizar el cálculo : '));
        calculoCuadrado(lado);
    break;
    case 'triángulo' :
        console.log('Cálculo triángulo')
        let base = parseInt(prompt('Dime un número el cual será la base para realizar el cálculo : '));
        let altura = parseInt(prompt('Dime un número el cual será la latura para realizar el cálculo : '));
        calculoTriángulo(base, altura);
    break;

}
