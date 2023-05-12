//const computerSelection = getComputerChoice();

const r = document.querySelector('#btn_rock');
//console.log(r);
r.addEventListener('click', () => {
    let playerSelection = 'rock';
    console.log('Rock selected!');
    playRound(playerSelection, getComputerChoice());
    console.log(player);
    console.log(computer);
    displayResult();
});

const p = document.querySelector("#btn_paper");
//console.log(p);
p.addEventListener('click', () => {
    let playerSelection = 'paper';
    console.log('Paper selected!');
    playRound(playerSelection, getComputerChoice());
    console.log(player);
    console.log(computer);
    displayResult();
});

const s = document.querySelector("#btn_scissors");
//console.log(s);
s.addEventListener('click', () => {
    let playerSelection = 'scissors';
    console.log('Scissors selected!');
    playRound(playerSelection, getComputerChoice());
    console.log(player);
    console.log(computer);
    displayResult();
});

function getComputerChoice () {
    const elements = ["rock", "paper", "scissors"];
    const randomElement = Math.floor(Math.random()*elements.length);
    return elements[randomElement];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return player += 0, computer += 1;
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return player += 1, computer += 0;
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie!");
        return player += 0, computer += 0;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie!");
        return player += 0, computer += 0;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return player += 0, computer += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return player += 1, computer += 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        return player += 1, computer += 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Tie!");
        return player += 0, computer += 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return player += 0, computer += 1;
    }
}
let player = 0;
let computer = 0;

const content = document.querySelector('#content');

const won = document.createElement('div');
won.textContent = 'YOU WON!';

const lost = document.createElement('div');
lost.textContent = 'YOU LOST!';

const tie = document.createElement('div');
tie.textContent = 'TIE!';

function displayResult() {
    /*if (player == 0 && computer == 0) {
        content.removeChild(won);
        content.removeChild(lost);
        content.removeChild(tie);
    }*/
    if (player == 5) {
        content.appendChild(won);
        //console.log("YOU WON!");
        const reset1 = document.createElement('button');
        reset1.textContent = 'Reset';
        content.appendChild(reset1);
        reset1.addEventListener('click', () => {
            content.removeChild(won);
            content.removeChild(reset1);
        });
        return player = 0, computer = 0;
        
    }
    
    else if (computer == 5) {
        content.appendChild(lost);
        //console.log("YOU LOST!");
        const reset2 = document.createElement('button');
        reset2.textContent = 'Reset';
        content.appendChild(reset2);
        reset2.addEventListener('click', () => {
            content.removeChild(lost);
            content.removeChild(reset2);
        });
        return player = 0, computer = 0;
    }
    else if (player == 5 && computer == 5) {
        content.appendChild(tie);
        //console.log("TIE!");
        const reset3 = document.createElement('button');
        reset3.textContent = 'Reset';
        content.appendChild(reset3);
        reset3.addEventListener('click', () => {
            content.removeChild(tie);
            content.removeChild(reset3);
        });
        return player = 0, computer = 0;
    }
}