const btn = document.querySelector('.button');

btn.addEventListener('click', function(){
    //numero squares da generare
    const numSquare = 100;
    //prendo la griglia di gioco
    const playground = document.getElementById('playground');
    //ciclo per stampare gli squares
    for(let i = 0; i >= numSquare; i++){
        
    }
});

function drawSquare(squareIndex,numSquare){
    //creo nuovo elemento div
    const square = document.createElement('div');
    //aggiungo square 
    square.classList.add('square');

    square.innerHTML(squareIndex + 1);
    square.addEventListener('click', function(){
        square.classList.add('active');
        square.style.color = 'black';
    })
}