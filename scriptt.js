
// Take references 
let rockBtn = document.querySelector("#rockButton");
let paperBtn = document.querySelector("#paperButton");
let scissorBtn = document.querySelector("#scissorButton");
let playerScore_affichage = document.querySelector("#playerScore");
let computer_Score_affichage = document.querySelector("#computerScore");


// Custom alert 
function showAlert(message) {
  document.getElementById("alert-message").textContent = message;
  document.getElementById("alert-backdrop").classList.remove("hidden");
  document.getElementById("alert-box").classList.remove("hidden");
}

// Close alert on OK
document.getElementById("alert-ok").addEventListener("click", () => {
  document.getElementById("alert-backdrop").classList.add("hidden");
  document.getElementById("alert-box").classList.add("hidden");
});


// Get computer choice
function getComputerChoice() {
    let num = Math.random() * 10; // random number between 0 and 10
    let choice;
    if (num < 3) {
        choice = "rock";
    } else if (num < 6) {
        choice = "scissors";
    } else {
        choice = "paper";
    }
    return choice;
}

// Player and computer scores
let humanScore = 0;
let computerScore = 0;

// Play one round
function playRound(humanChoice) {
    let computerChoice = getComputerChoice(); // get computer choice each rouund
    showAlert(`The PC chose ${computerChoice}`);

    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        showAlert("You won this round!");
    } else if (humanChoice === computerChoice) {
        showAlert("Draw");
    } else {
        computerScore++;
        showAlert("You lost this round!");
    }

    afficher_Score(); // update score display
}

// Update scor on the page
function afficher_Score() {
    playerScore_affichage.textContent = humanScore;
    computer_Score_affichage.textContent = computerScore;
}

// 5 round game function
function playGame() {
    let roundsPlayed = 0;
    let totalRounds = 5;

    // Handle a single round click
    function roundHandler(playerChoice) {
        if (roundsPlayed < totalRounds) {
            playRound(playerChoice); // play a round
            roundsPlayed++;

            if (roundsPlayed === totalRounds) {
                // Show final result
                if (humanScore > computerScore) {
                    showAlert("Game over! You won the game!");
                } else if (humanScore < computerScore) {
                    showAlert("Game over! Computer won the game!");
                } else {
                    showAlert("Game over! It's a draw!");
                }

                // Reset 
                humanScore = 0;
                computerScore = 0;
                roundsPlayed = 0;
                afficher_Score();
            }
        } else {
            showAlert("The 5 rounds are already finished!");
        }
    }

    // Attach button events 
    rockBtn.addEventListener("click", () => roundHandler("rock"));
    paperBtn.addEventListener("click", () => roundHandler("paper"));
    scissorBtn.addEventListener("click", () => roundHandler("scissors"));
}

// Start
playGame();
