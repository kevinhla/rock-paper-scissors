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
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection)
    {
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock")
    {
        return 2;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection || playerSelection === "paper" && computerSelection === "scissors")
    {
        return 3;
    }
}


let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
