// 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// o no. Usa un switch para ello.



let dia = prompt('Dime un día de la semana: ').toLowerCase();

switch(dia){
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log('Entre semana');
        break;
    case "sábado":
    case "domingo":
        console.log('Findeeeeee');
        break;
    default:
        console.log('No es un día válido');
        break;
};