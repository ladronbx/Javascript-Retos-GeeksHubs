// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

let intentos = 3;
let i = 1;

do {
  password = prompt('Escribe la contraseña correcta:');
  i++;
} while (password !== "password" && i <= intentos);

if (password === "password") {
  alert("Enhorabuena, la contraseña es correcta.");
} else {
  alert("Has agotado tus intentos. La contraseña es incorrecta.");
}




// **************************
// let intentos = 3;

// let password = prompt('Escribe la contraseña correcta :');

// >>>>>>>>> if anidados (muy lioso... mejor un do while) <<<<<<<<
// if (password === 'password') {
//     alert('Enhorabuena!')
// } else if (password !== 'password') {
//     password = prompt('Escribe la contraseña correcta. (segundo intento):');
//     if (password !== 'password') {
//         password = prompt('Escribe la contraseña correcta. (tercer intento):');
//         if (password !== 'password') {
//             alert('lo siento no sabes la contraseña.')
//     }else{
//         alert('Enhorabuena!')
//     }
//     };
// }; 
// **************************

