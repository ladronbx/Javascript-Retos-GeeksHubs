let limit = parseInt(prompt('Dime un límite de números'));

function comprobar(){
    for (let i = 1; i <= limit; i++){
        if((i % 3 === 0) && (i % 5 === 0) ){
            console.log(i + " FizzBuzz");
        }else if(i % 5 === 0){
            console.log(i + " Buzz");
        }else if(i % 3 === 0){
            console.log(i +" Fizz");
        }else{
            console.log(i);
        };
    };
};

do {
    if(!isNaN(limit)){
        comprobar();
    } else {
        console.log('Por favor, ingresa un límite válido.');
    }
    limit = parseInt(prompt('Dime un límite de números'));
} while(isNaN(limit));






// CON UN ARRAY
// let array = [ ];
// for (let i = 0; i <= 100; i++){
//     if((i % 3 === 0) && (i % 5 === 0) ){
//         array[i] = "FIZZBUZZ";
//         console.log(i + " FizzBuzz");
//     }else if(i % 5 === 0){
//         array[i] = "BUZZ"
//         console.log(i + " Buzz");
//     }else if(i % 3 === 0){
//         array[i] = "FIZZ"
//         console.log(i +" Fizz");
//     }else{
//         console.log(i);
//     }
// };

// console.log(array)

