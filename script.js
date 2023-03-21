function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3 + 1);
    if (roll === 1)
    {
        return "rock";
    }
    else if (roll === 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
    {
        return "It is a tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock")
    {
        return "You have won the round!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection || playerSelection === "paper" && computerSelection === "scissors")
    {
        return "You have lost the round.";
    }
}


let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


console.log(playRound(playerSelection, computerSelection));
