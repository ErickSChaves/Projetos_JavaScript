document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event) {
    
    console.log((event.target));

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() => {~

            console.log(playerTime)


                if(playerTime == 0){

                    let = resultado =  confirm(" O jogo acabou! \n  o vencedor foi o jogador x \n voce deseja jogar novamente?");
                            if(resultado == true) {
                                reiniciarJogo();

                                
                            }
                    }else if (playerTime == 1){

                    let resultado = confirm(" O jogo acabou! \n   o vencedor foi o jogador bolinha \n voce deseja jogar novamente?");
                            if(resultado == true) {
                                reiniciarJogo();

                            }
                    }
                
        }, 10);
  
    }
    
        updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

