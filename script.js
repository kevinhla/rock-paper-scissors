function getPlayerChoice(){
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3 + 1);
    if (roll === 1){
        
        return "rock";
    }
    else if (roll === 2){
        
        return "paper";
    }
    else {
        
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        
        console.log("It is a tie.");
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        
        console.log("You have won the round!");
        return 2;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection || playerSelection === "paper" && computerSelection === "scissors"){
       
        console.log("You have lost the round.");
        return 3;
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    
    for (let i = 0; i < 5; i++) {
        
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log("You chose " + playerSelection);
        console.log("Computer chose " + computerSelection);
        let result = playRound(playerSelection, computerSelection);

        if (result === 2){
            playerCount += 1;
        }
        if (result === 3){
            computerCount += 1;
        }

        console.log("Player: " + playerCount + "\nComputer: " + computerCount + "\n" + (4 - i) + " game(s) left!");

    }

    if (playerCount > computerCount){
        console.log("Good game! You have won the game!")
    }
    else if (playerCount < computerCount){
        console.log("Better luck next time. You lost!")
    }
    else {
        console.log("It is a tie game!")
    }
    
}


let computerSelection;
let playerSelection;

game();