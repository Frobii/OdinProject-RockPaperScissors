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
let  i = 0;
let reset = "";

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

function startGame() {   // create a function which I can call on to start the game & loop it when a round is over

    for (i = 0; i < 5; i++) {
        game(); 
        
        if (outcome == "Draw!") {
            i--;
        } else if (outcome == "Please make a valid selection.") {
            i--;
        }; // use an if else statement to make i not increment if there is a draw or a selection isn't valid
        

        for (x = 0; x < 1; x++)   // make a for loop so that invalid selections won't close the prompt
            if (winCounter == 3) { // create an if else statement for if the player wins
                reset = prompt("You were the best out of 5! Play again? Y/N")
                if (reset.toUpperCase() == "Y") { 
                    winCounter = 0;
                    lossCounter = 0;
                    startGame();
                } else if (reset.toUpperCase() == "N") {
                    alert("Thanks for Playing!");
                    break; // use a break to stop the game from restarting
                } else {
                    alert("Please make a valid selection.");
                    x--; // keeps the for loop going if something invalid is typed in the prompt
                };
            } else if (lossCounter == 3) {    // create an if else statement for if the player loses 
                reset = prompt("Your opponent was the best out of 5! Play again? Y/N")
                if (reset.toUpperCase() == "Y") { 
                    winCounter = 0;
                    lossCounter = 0;
                    startGame();
                } else if (reset.toUpperCase() == "N") {
                    alert("Thanks for Playing!");
                    break;
                } else {  
                    alert("Please make a valid selection.");
                    x--;  
                };
            
        };
    };
}; 

startGame();     // call on a function to start the game