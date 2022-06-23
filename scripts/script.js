
//Function returns randomly either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You are equal!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "Computer Win! Paper beats Rock";
        } else {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "You are equal!";

        } else {
            computerScore++;
            return "Computer Win! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            computerScore++;
            return "Computer Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else {
            return "You are equal!";
        }
    }

}


let round = 1;
function game() {
    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Please select: rock, paper or scissors?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();

        document.getElementById('round' + (i + 1)).innerHTML = "Round " + round;
        document.getElementById('result' + (i + 1)).innerHTML = playRound(playerSelection, computerSelection);
        round++;

    }

    console.log("<br>");
    console.log("Your Score is: " + playerScore + "<br>");
    console.log("Computer Score: " + computerScore + "<br><br>");

}

let result = "";
function getResult() {
    if (playerScore > computerScore) {

        console.log("You are the winner! <br>");
        result = "You are the winner !";

    } else if (playerScore < computerScore) {

        console.log("Computer is the winner! <br>");
        result = "Computer is the winner !";

    } else if (playerScore === computerScore) {

        console.log("You are equivalent ! <br>");
        result = "You are equal!";

    }

    return result
}
game();


let player = "Your score is: " + playerScore;
let computer = "computer score is: " + computerScore;


document.getElementById('playerScore').innerHTML = player;
document.getElementById('computerScore').innerHTML = computer;
document.getElementById('finalResult').innerHTML = getResult();


