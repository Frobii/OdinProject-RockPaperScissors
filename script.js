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

const playerSelection = "roCk";

function playRound(playerSelection) {
    
    if (playerSelection.toUpperCase() == "ROCK" && computerPlay() == "Rock") {
        outcome = "Draw!" 
    } else if (playerSelection.toUpperCase() == "ROCK" && computerPlay() == "Paper") {
        outcome = "You lose! Paper beats rock!" 
    } else if (playerSelection.toUpperCase() == "ROCK" && computerPlay() == "Scissors") {
        outcome = "You win! Rock beats scissors!"
        // setup all of the "rock" rules
    } else if (playerSelection.toUpperCase() == "PAPER" && computerPlay() == "Rock") {
        outcome = "You win! Paper Beats rock!"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerPlay() == "Paper") {
        outcome = "Draw!"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerPlay() == "Scissors") {
    outcome = "You lose! Scissors beats paper!"
        // setup all of the "paper" rules
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerPlay() == "Rock") {
        outcome = "You lose! Rock beats scissors"
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerPlay() == "Paper") {
        outcome = "You win! Scissors beats Paper"
    } else {
    outcome = "Draw!"
    };  // setup all of the "scissors" rules

    return outcome;
    
};

let winCounter = 0;
let lossCounter = 0;
let gameOver = "";

function game() {
    if (winCounter >= 5 && lossCounter < 5) {
        gameOver = "You were the first to 5 wins! Conratulations!"
    };
     // create game over statement for a win

    if (lossCounter >= 5 && winCounter < 5) {
        gameOver = "The computer beat you to 5 wins! Better luck next time!"
    };
     // create game over statement for a loss

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
                (outcome === 
                "You lose! Paper beats rock!" ||
                outcome ==
                "You lose! Scissors beats paper!" ||
                outcome ==
                "You lose! Rock beats scissors" )
                { lossCounter++;
                    // setup a counter that goes up by one every time the player loses
            } else 
                (outcome ===
                "Draw!");
        return outcome
    };
};

