// 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

let text = prompt('Dime una cadena de texto:');

const check = (text) => {
    const textoEnMinusculas = text.toLowerCase();
    
    if (text === textoEnMinusculas) {
        console.log('Todas las letras están en minúsculas.');
    } else {
        console.log('No todas las letras están en minúsculas.');
    }
}

check(text);
