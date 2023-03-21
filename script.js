function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3 + 1);
    if (roll === 1)
    {
        return "Rock";
    }
    else if (roll === 2)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

console.log(getComputerChoice());