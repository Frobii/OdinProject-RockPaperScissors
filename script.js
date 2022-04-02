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

let computerSelection = computerPlay();


function gameRules() {
    
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        outcome = "Draw!" 
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        outcome = "You lose! Paper beats rock!" 
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        outcome = "You win! Rock beats scissors!"
        // setup all of the "rock" rules
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        outcome = "You win! Paper Beats rock!"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        outcome = "Draw!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    outcome = "You lose! Scissors beats paper!"
        // setup all of the "paper" rules
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        outcome = "You lose! Rock beats scissors"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        outcome = "You win! Scissors beats Paper"
    } else {
    outcome = "Draw!"
    };  // setup all of the "scissors" rules

    return outcome;
    
} 