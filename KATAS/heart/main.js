//💚

const heart = document.getElementById('heart');



document.addEventListener('click', (event) => {
    if(event.target.id === "heart"){ 
        if(heart.innerText === "❤️"){
            heart.innerText = '💚';
        }else{
            heart.innerText = "❤️";
        };

    };
});


