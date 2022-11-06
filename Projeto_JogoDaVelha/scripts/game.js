

let board = ['','','','','','','','',''];
let playerTime = sortearJogador(0, 1);
let symbols = ['o', 'x'];
let gameOver = false;
let empate = false;
let resultado = false;
let tabu = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
]
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


QuemVaiComecar()

function QuemVaiComecar(){

    if(playerTime == 0){

        alert(" Bolinha vai começar ")
    }else{
        alert(" X vai comecar ")
    }
}




    function handleMove(position){
        console.log(playerTime)

        if (gameOver){
            return;
        }

      //
      
        console.log("Vitoria - " + gameOver)
        console.log("Empate - " + empate);
        console.log("Tabuleio - " + board);
    
    if(empate == false){
    
        if(gameOver == false){         
                if(board[position] == ''){

                    board[position] = symbols[playerTime];

                    setTimeout(() => {~

                    console.log("Teste -" +  gameOver);
                    
                    gameOver = isWin();
                    
                    empate = checarEmpate();

       
                    if(playerTime == 0){
                        
                        playerTime = 1;

                    }else{

                        playerTime = 0;

                    }
        
            }, 10);
        }
                return gameOver;
            }
        
            return gameOver;
        }
        return empate;
        
    }


       

function isWin(){

    for (let i = 0; i< winStates.length; i++) {
       let seq = winStates[i];

       let pos1 = seq[0];
       let pos2 = seq[1];
       let pos3 = seq[2];

       if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '' ){


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
        
            return true;
      
       }
       
    }
        return false;
}

function checarEmpate(){

   for (let i = 0; i< tabu.length; i++) {
       let seq = tabu[i];

       let pos1 = seq[0];
       let pos2 = seq[1];
       let pos3 = seq[2];
       let pos4 = seq[3];
       let pos5 = seq[4];
       let pos6 = seq[5];
       let pos7 = seq[6];
       let pos8 = seq[7];
       let pos9 = seq[8];

      if(

         board[pos1] != '' && board[pos2] != '' && board[pos3] != '' && board[pos4] != '' && board[pos5] != '' &&
         board[pos6] != '' && board[pos7] != '' && board[pos8] != '' && board[pos9]

      ){

        let resultado = confirm(" O jogo acabou! \n  deu velha \n voce deseja jogar novamente?");
                if(resultado == true) {

                    reiniciarJogo();
                }
            
        return true;

      }
       
    }
        return false;
}


function sortearJogador(a, b){

   return Math.floor(Math.random() * (b - a + 1)) + a
}

function reiniciarJogo(){
   
    return document.location.reload(true);
}

