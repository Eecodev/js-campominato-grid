const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    //numero squares da generare
    const numSquare = 100;
    //prendo la griglia di gioco
    const playground = document.getElementById('playground');
    //prima di riempire svuoto tutto
    playground.innerHTML = '';
    //ciclo per stampare gli squares
    for(let i = 0; i < numSquare; i++){
        //genero square
        let square = drawSquare(i,numSquare);
        //appendo square al playground
        playground.append(square);

    }
});

function drawSquare(squareIndex,numSquare){
    //creo nuovo elemento div
    const square = document.createElement('div');
    //aggiungo square 
    square.classList.add('square');

    //stampo squares in html
    square.innerHTML = squareIndex + 1;
    //al click...
    square.addEventListener('click', function(){
        //lo square diventa aquamarine
        square.classList.add('active');
        //e il numero nero
        square.style.color = 'black';
    });
    return square;
}