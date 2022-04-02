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
};

const Paper = "Paper";

function playRound(playerSelection) {
    
    if (playerSelection == "Rock" && computerPlay() == "Rock") {
        outcome = "Draw!" 
    } else if (playerSelection == "Rock" && computerPlay() == "Paper") {
        outcome = "You lose! Paper beats rock!" 
    } else if (playerSelection == "Rock" && computerPlay() == "Scissors") {
        outcome = "You win! Rock beats scissors!"
        // setup all of the "rock" rules
    } else if (playerSelection == "Paper" && computerPlay() == "Rock") {
        outcome = "You win! Paper Beats rock!"
    } else if (playerSelection == "Paper" && computerPlay() == "Paper") {
        outcome = "Draw!"
    } else if (playerSelection == "Paper" && computerPlay() == "Scissors") {
    outcome = "You lose! Scissors beats paper!"
        // setup all of the "paper" rules
    } else if (playerSelection == "Scissors" && computerPlay() == "Rock") {
        outcome = "You lose! Rock beats scissors"
    } else if (playerSelection == "Scissors" && computerPlay() == "Paper") {
        outcome = "You win! Scissors beats Paper"
    } else {
    outcome = "Draw!"
    };  // setup all of the "scissors" rules

    return outcome;
    
} 