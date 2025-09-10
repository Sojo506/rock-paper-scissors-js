function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoide, computerChoice) {
    if (humanChoide === computerChoice) {
        alert(`It's a tie! Both chose ${humanChoide}.`);
    } else if (
        (humanChoide === 'rock' && computerChoice === 'scissors') ||
        (humanChoide === 'paper' && computerChoice === 'rock') ||
        (humanChoide === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        alert(`You win! ${humanChoide} beats ${computerChoice}. Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoide}. Score: You ${humanScore} - Computer ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);