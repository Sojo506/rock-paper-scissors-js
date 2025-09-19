const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnRefresh = document.getElementById('refresh');

btnRock.addEventListener('click', () => playRound('rock', getComputerChoice()));
btnPaper.addEventListener('click', () => playRound('paper', getComputerChoice()));
btnScissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

btnRefresh.addEventListener('click', () => location.reload());

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* This function is no longer needed as we are using buttons for user input
function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}*/

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoide, computerChoice) {
    if(humanScore === 5 || computerScore === 5) {
        resultDisplay.textContent = "Game over! Please refresh to play again.";
        return;
    }

    if (humanChoide === computerChoice) {
        resultDisplay.textContent = `It's a tie! Both chose ${humanChoide}.`;
    } else if (
        (humanChoide === 'rock' && computerChoice === 'scissors') ||
        (humanChoide === 'paper' && computerChoice === 'rock') ||
        (humanChoide === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultDisplay.textContent = `You win! ${humanChoide} beats ${computerChoice}.`;
        scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    } else {
        computerScore++;
        resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoide}.`;
        scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }
}


/* This function is no longer needed as the game is played via button clicks
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
        resultDisplay.textContent = "Congratulations! You won the game!";
    } else {
        resultDisplay.textContent = "Sorry! The computer won the game.";
    }
}*/

//playGame();