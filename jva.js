function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Draw! Try again"
    }

    else if ((playerSelection == "rock") && (computerSelection == "scissor") || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection == "scissor") && (computerSelection == "rock"))) {
        return "You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
    }

    else {
        return "You lose!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
    }
}

function playGame() {
    let playerSelection = prompt("What is your move?");
    for (let count = 0; count < 5; count += 1) {
        playerSelection = playerSelection.toLowerCase();
        let a = playRound(playerSelection, getComputerChoice());
        console.log(a);
    }
}

playGame();