// 4. Pedir un string y determinar si tiene cinco caracteres o más.

// const texto = prompt('Dime un texto y te diré cuantos carácteres tiene: ')
const texto = "Hol a a";

const textoSinEspacios = texto.replace(/\s/g, ''); // El regex /\s/g coincide con todos los espacios en blanco
const longitudSinEspacios = textoSinEspacios.length;

console.log(`El texto tiene ${longitudSinEspacios} caracteres sin contar los espacios.
Y tiene ${texto.length} contando espacios`);
