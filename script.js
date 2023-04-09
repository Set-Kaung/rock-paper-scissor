const choiceMp = new Map();
choiceMp.set(0, 'Rock');
choiceMp.set(1, 'Paper');
choiceMp.set(2, 'Scissor');
function getComputerChoice() {
    return Math.floor(Math.random() * 1 * Math.random() * 3)
};

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;



let winnerDecl = document.querySelector(".winner-declaration");
let playerChoice = document.querySelector(".player-choice");
let computerChoice = document.querySelector(".computer-choice");
let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");
let buttonContainer = document.querySelector(".button-container");
let playBtn = document.querySelector(".play");
let record = document.querySelector(".record");

buttonContainer.style.display = "none";
record.style.display = "none";





function playing(){
    buttonContainer.style.display ="block";
    playBtn.style.display = "none";
    record.style.display = "block";
}

function ending(winner){
    buttonContainer.style.display = "none";
    playBtn.style.display = "block";
    winnerDecl.textContent = "Winner is:" + winner;
    playerScore = 0;
    computerScore = 0;
    playerChoice.textContent = "";
    computerChoice.textContent = "";
    record.style.display = "none";
}

function updateDisplay(){
    playerScoreText.textContent = "Player Score:" + playerScore;
    computerScoreText.textContent = "Computer Score:" + computerScore;

}

function winning(winner){
        if(winner === "Player"){
            playerScore++;
            updateDisplay();
            if(playerScore == 5){
                ending("Player");
            }
        }
        else if(winner == "Computer"){
            computerScore++;
            updateDisplay();
            if(computerScore == 5){
                ending("Computer");
            }
        }
}

// /*
// the mapping to numbers solve the issues of writing too many conditional statements.
// but since the graph of win conditions is circular, it is required to adjust two of the values.
// the %2!=0 check whether it is a scissor and rock condition in this case.
// */

function round(input) {
    const mp = new Map()
    mp.set('player', input)
    mp.set('computer', getComputerChoice())


    playerChoice.textContent = "Player choosed: " + choiceMp.get(mp.get('player'));
    computerChoice.textContent = "Computr choosed: " + choiceMp.get(mp.get('computer'));
    

    if(mp.get('player') === mp.get('computer')) {

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
rockBtn.addEventListener("click", () => {round(0)});

let paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {round(1)});

let scissorBtn = document.querySelector(".scissor");
scissorBtn.addEventListener("click", () => {round(2)});

playBtn.addEventListener("click", playing);
