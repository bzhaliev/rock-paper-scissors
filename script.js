const computerSelection = getComputerChoice();


function getComputerChoice () {
    const elements = ["rock", "paper", "scissors"];
    const randomElement = Math.floor(Math.random()*elements.length);
    return elements[randomElement];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return 2;
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie!");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie!");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return 2;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        return 2;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Tie!");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return 0;
    }
}

function game() {
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type what you choose:");
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            player = player + 0;
            computer = computer + 1;
        }
        else if (result === 1) {
            player = player + 1;
            computer = computer + 1;
        }
        else if (result === 2) {
            player = player + 1;
            computer = computer + 0;
        }
    }

    if (player > computer) {
        console.log("YOU WON!");
    }

    else if (player < computer) {
        console.log("YOU LOST!");
    }
    else if (player = computer) {
        console.log("TIE!")
    }

    console.log(player);
    console.log(computer);
}


console.log(game());