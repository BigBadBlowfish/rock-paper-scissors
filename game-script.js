const choices = ["rock", "paper","scissors"];

function computerPlay() {
    const choice = Math.floor(Math.random()*3);
    return choice;
};
let playerScore = 0;
let computerScore = 0;
let done = false;
let playerWin = false;
let computerWin = false;
const result = document.querySelector('div.result');
function playRound(playerSelection, computerSelection) {


    playerSelection++;
    computerSelection++;

    let tempPScore = playerScore;
    let tempCScore = computerScore;

  
    const score = document.querySelector('div.score');
    if (playerSelection===computerSelection) {
   
        let content = document.createElement('p');
        content.textContent = "Tie Game!";
        result.appendChild(content);

        

        return 0;

    } else if ((playerSelection - computerSelection + 1) % 3 === 0) {

        let content = document.createElement('p');
        content.textContent = "You Lose! " + choices[computerSelection-1] + " beats " + choices[playerSelection-1];
        result.appendChild(content);

        document.getElementById("playerScore").textContent = "Your score: " + tempPScore;
        document.getElementById("computerScore").textContent = "Computer score: " + (tempCScore+1);

        return 1;

    } else {

        let content = document.createElement('p');
        content.textContent = "Victory! " + choices[playerSelection-1] + " beats " + choices[computerSelection-1];
        result.appendChild(content);

        document.getElementById("playerScore").textContent = "Your score: " + (tempPScore+1);
        document.getElementById("computerScore").textContent = "Computer score: " + tempCScore;

        return 2;

    }
}




document.querySelectorAll('button.choice').forEach(choice => {
    choice.addEventListener('click', function() {
         
        if (done === true) {
            alert ("Game over. Refresh page to play again.")
            return;
        }

        if (playerScore == 5 || computerScore == 5) {

            let victoryString = "";

            if(playerScore > computerScore) {
                playerWin = true;
                victoryString = "You won! Great job!"
            } else {
                computerWin = true;
                victoryString = "You Lost! Better luck next time."
            }

            let content = document.createElement('p');
            content.textContent = "Game Over. " + victoryString;
            result.appendChild(content);

            done = true;

        } else {

            let result = playRound(this.id,computerPlay());
            if (result === 1) {
             computerScore++;
            } else if (result ===2) {
            playerScore++;
            }
        }
    });
});
