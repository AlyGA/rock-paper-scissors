'use strict';

function computerPlay() { //Function for computer to choose options
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

let playerWins = "You win!";
let computerWins = "You lose!"


function playRound(playerSelection, computerSelection) { //Outcomes of what the user would choose again the computer.
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return playerWins;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return computerWins;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return computerWins;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return computerWins;
    } else {
        return "Uh oh! Looks like you typed in something invalid. Please select between the options 'Rock', 'Paper', or 'Scissors.' Thank you!";
    }
}


let playerScore = 0; // Player's starting score
let computerScore = 0; // Computer's starting score

function game() { // Checks to see which score will be higher than the other's
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay(); //Takes the computer's input
        const playerSelection = window.prompt("Enter your choice: ").toLowerCase(); //Takes the users's input
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) === playerWins) {
            console.log("You win this round!");
            playerScore++;
        } else {
            console.log("You lose this round!");
            computerScore++;
        }
        continue;
     }
     if (playerScore > computerScore) {
         console.log("The player wins overall!");
     } else if (playerScore < computerScore){
        console.log("Sorry you lose!");
        return;
     }
     else {
         console.log("It's a draw!");
         return;
     }
}

game()
