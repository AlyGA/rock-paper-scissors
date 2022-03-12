"use strict";

// Initial Values
const body = document.querySelector("body");
const results = document.querySelector(".results");
const resultDisplayer = document.createElement("div");
const overallWinner = document.createElement("div");
const buttons = document.querySelectorAll(".button");
const playerWins = "You win!";
const computerWins = "You lose!";
const draw = "It's a draw!";
let playerScore = 0; // Player's starting score
let computerScore = 0; // Computer's starting score

//Function for computer to choose options
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random].toLowerCase();
}

//Outcomes of what the user would choose again the computer.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWins;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWins;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWins;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computerWins;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computerWins;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerWins;
  } else if (playerSelection === computerSelection) {
    return draw;
  } else {
    return "Uh oh! Looks like you typed in something invalid. Please select between the options 'Rock', 'Paper', or 'Scissors.' Thank you!";
  }
}

// Loops through each button node, since it's a group.
buttons.forEach((button) => {
  // Event listener that returns a value after a button is pressed.
  button.addEventListener("click", function () {
    const computerSelection = computerPlay(); //Takes the computer's input
    const playerSelection = window.prompt("Enter your choice: ").toLowerCase(); //Takes the users's input
    // Plays a round
    let game = playRound(playerSelection, computerSelection);

    // Displays current result and adds it to the UI.
    resultDisplayer.classList.add("resultDisplayer");
    resultDisplayer.textContent = game;
    results.appendChild(resultDisplayer);

    // Score counting.
    if (playRound(playerSelection, computerSelection) === playerWins) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection) === computerWins) {
      computerScore++;
    }

    // Displays the true winner once either score gets to 5.
    if (playerScore === 5) {
      const winnerPlayer = "The player wins overall!";
      overallWinner.classList.add("overallWinner");
      overallWinner.textContent = winnerPlayer;
      body.appendChild(overallWinner);
    } else if (computerScore === 5) {
      const winnerComputer = "Sorry you lose!";
      overallWinner.classList.add("overallWinner");
      overallWinner.textContent = winnerComputer;
      results.appendChild(overallWinner);
    }
  });
});
