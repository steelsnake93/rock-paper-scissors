const choices = ['rock', 'paper', 'scissors'];
let winners = [];

// To check 5 rounds.
function game() {
    for (let i = 0; i <= 5; i++){
        playRound(i);
    }
    logWins();
}

// Plays a single round and declare winner.
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

// Player selection  with parameter case-insensitive.
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            'Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doest matter'
        );
        while (input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

// Random computer choice.
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

// Return result of each round.
function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

// Collect strings to declare winner.
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Ties').length;
    console.log('Result');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log('---------------------------');
}