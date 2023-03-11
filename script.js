const choiceMp = new Map()
choiceMp.set(0, 'Rock')
choiceMp.set(1,'Paper')
choiceMp.set(2,'Scissor')
function getComputerChoice() {
    return Math.floor(Math.random()*1 * Math.random()*3) 

}

//this funciton mapped 0 to rock, 1 to paper and 2 to scissor
function getInput(){
    let input = prompt("Enter Rock,Paper or Scissor")
    while(input===""){
        input = prompt("Please enter a choice!")
    }
    input = input.toLowerCase()
    if(input === "rock"){
        return 0
    }
    else if(input === "paper"){
        return 1
    }
    else{
        return 2
    }
}

/*
the mapping to numbers solve the issues of writing too many conditional statements.
but since the graph of win conditions is circular, it is required to adjust two of the values.
the %2!=0 check whether it is a scissor and rock condition in this case.
*/

function game(){
    const mp = new Map()
    mp.set('player',getInput())
    mp.set('computer',getComputerChoice())

    console.log("The computer choosed: "+ choiceMp.get(mp.get('computer')))
    console.log("You choosed: " + choiceMp.get(mp.get('player')))
    
    if(mp.get('player') === mp.get('computer')){
        console.log("It's a tie!")
    }
    else if((mp.get('player')+mp.get('computer'))%2 != 0){
        winner = mp.get('player') > mp.get('computer') ? "Player" : "Computer"
        console.log("The winner is " + winner)
    }
    else{
        winner = mp.get('player') < mp.get('computer') ? "Player" : "Computer"
        console.log("The winner is " + winner)
    }
    
}

game()