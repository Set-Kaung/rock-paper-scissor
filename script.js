const choiceMp = new Map();
choiceMp.set(0, 'Rock');
choiceMp.set(1, 'Paper');
choiceMp.set(2, 'Scissor');
function getComputerChoice() {
    return Math.floor(Math.random() * 1 * Math.random() * 3)
};

let playerScore = 0;
let computerScore = 0;


let winnerDecl = document.querySelector(".winner-declaration");
let playerChoice = document.querySelector(".player-choice");
let computerChoice = document.querySelector(".computer-choice");
let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");



function winning(winner){
    if(winner === "Player"){
        playerScore++;
        playerScoreText.textContent = "Player: " + playerScore;

    }else{
        computerScore++;
        computerScoreText.textContent = "Computer:" + computerScore;
    }

    if(playerScore === 5){
        winnerDecl.textContent = "You win! :)";
    }
    else if(computerScore === 5){
        winnerDecl.textContent = "The Computer wins! :((";
    }
}



// /*
// the mapping to numbers solve the issues of writing too many conditional statements.
// but since the graph of win conditions is circular, it is required to adjust two of the values.
// the %2!=0 check whether it is a scissor and rock condition in this case.
// */

function game(input) {
    const mp = new Map()
    mp.set('player', input)
    mp.set('computer', getComputerChoice())

    playerChoice.textContent = "You choosed " + choiceMp.get(mp.get('player'));
    computerChoice.textContent = "The computer choosed " + choiceMp.get(mp.get('computer'));
    

    if (mp.get('player') === mp.get('computer')) {
        winnerDecl.textContent = "It's a tie!";
    }

    else if ((mp.get('player') + mp.get('computer')) % 2 != 0) {
        winner = mp.get('player') > mp.get('computer') ? "Player" : "Computer"
        winning(winner);
    }
    else {
        winner = mp.get('player') < mp.get('computer') ? "Player" : "Computer"
        winning(winner);
    }

}


let rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {game(0)});

let paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {game(1)});

let scissorBtn = document.querySelector(".scissor");
scissorBtn.addEventListener("click", () => {game(2)})