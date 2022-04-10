function computerPlay() {

   let randomPickNumber = Math.floor(Math.random() * 3);
    if (randomPickNumber == 0 ) {
        randomPick = "Rock"
    } else if (randomPickNumber == 1) {
        randomPick = "Paper"
    } else {
        randomPick = "Scissors"
    };
    return randomPick;

}; // setup a random generator for our CPU opponent


function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Rock") {
        outcome = "Draw!" 
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") {
        outcome = "You lose! Paper beats rock!" 
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors") {
        outcome = "You win! Rock beats scissors!"
        // setup all of the "rock" rules
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") {
        outcome = "You win! Paper Beats rock!"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Paper") {
        outcome = "Draw!"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors") {
    outcome = "You lose! Scissors beats paper!"
        // setup all of the "paper" rules
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock") {
        outcome = "You lose! Rock beats scissors"
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper") {
        outcome = "You win! Scissors beats Paper"
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Scissors") {
        outcome = "Draw!"; // setup all of the "scissors" rules
    } else { outcome = "Please make a valid selection."
    };  

    return alert(outcome);
    
};

let winCounter = 0;
let lossCounter = 0;
let gameOver = "";

function game() {

    let playerSelection = prompt("Rock, Paper, Scissors!");
    
        playRound(playerSelection); {
            if (outcome == 
                "You win! Scissors beats Paper" ||
                outcome == 
                "You win! Paper Beats rock!" ||
                outcome == 
                "You win! Rock beats scissors!" ) 
                { winCounter++;
                    // setup a counter that goes up by one every time the player wins
            } else if 
                (outcome == 
                "You lose! Paper beats rock!" ||
                outcome ==
                "You lose! Scissors beats paper!" ||
                outcome ==
                "You lose! Rock beats scissors" )
                { lossCounter++;
                    // setup a counter that goes up by one every time the player loses
            } else if
                (outcome ==
                "Draw!");
            return outcome;
        };

};

function startGame() {

    for (winCounter < 5; lossCounter < 5;) {
        game(); 
    };
};  // create a function which I can call on to start the game & loop it when a round is over

startGame();


if (winCounter == 5) {

    gameOver = prompt("You were the first to 5 wins! Congratulations! Play again? Y/N")
 // create game over statement for a win

} else if (lossCounter == 5) {
    gameOver = prompt("The computer beat you to 5 wins! Better luck next time! Play again? Y/N") 
 // create game over statement for a loss

};


if (gameOver.toUpperCase() == "Y") {

    winCounter = 0;
    lossCounter = 0;
    startGame();

} else if (gameOver.toUpperCase() == "N" ) {

    alert("Thanks for playing!");

};  // create if/else if statements so the player can choose to play again once the game is over