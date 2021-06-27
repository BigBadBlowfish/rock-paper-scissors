const choices = ["rock", "paper","scissors"];

function computerPlay() {
    const choice = Math.floor(Math.random()*3);
    return choice;
};

function playRound(playerSelection, computerSelection) {


    playerSelection++;
    computerSelection++;

    if (playerSelection===computerSelection) {
        console.log("Tie game!");
        return 0;
    } else if ((playerSelection - computerSelection + 1) % 3 === 0) {
        console.log("You Lose! " + choices[computerSelection-1] + " beats " + choices[playerSelection-1]);
        return 1;
    } else {
        console.log("Victory! " + choices[playerSelection-1] + " beats " + choices[computerSelection-1]);
        return 2;
    }
}

document.querySelectorAll('button.choice').forEach(choice => {
    choice.addEventListener('click', function() {
        console.log(this.id);
       playRound(this.id,computerPlay());
    });
});


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (i=0; i<5;i++) {
        let playerSelection = choices.indexOf(prompt().toLowerCase());
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        if (result === 1) {
            computerScore++;
        } else if (result ===2) {
            playerScore++;
        }
    }

    console.log("Game over!");
    console.log("Your score is " + playerScore);
    console.log("Computer score is " + computerScore);

}