// computer choice
function getComputerChoice(computerList) {
    let index = Math.floor(Math.random() * computerList.length);
    return computerList[index];
}

const computerList = ["rock", "paper", "scissors"];

// human choice
function getHumanChoice(userInput) {
    return userInput;
}

// human choics buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// 
const humanInput = document.getElementById("human-choice");
const computerInput = document.getElementById("computer-choice");

// scores
// human and computer score
let hScore = document.getElementById("human-score");
let cScore = document.getElementById("computer-score");
let humanScore = 0;
let computerScore = 0;

// result
const result = document.getElementById("result");

const playerScore = document.getElementById("player-score");
const finalResult = document.getElementById("final-result");

// maximum number of rounds
let roundCount = 0;
let maxCount = 5;

function playGame() {
    // play round
    function playRound(humanChoice, computerChoice)
    {
        // humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            result.textContent = "Human wins";
            hScore.textContent = humanScore += 1;
        } else {
            result.textContent = "Computer wins";
            cScore.textContent = computerScore += 1;
        }

        roundCount++;

        // check if max round reached
        if(roundCount >= maxCount) {
            declareFinalWinner();
            resetGame();
        }
    }

    function declareFinalWinner() {
        if (humanScore > computerScore) {
            const finalScore = `human : ${humanScore}, computer : ${computerScore}`
            playerScore.textContent = finalScore;
            finalResult.textContent = "Human Wins";
            // alert(`Game over! Human wins! Final score: Human ${humanScore}, Computer ${computerScore}`);
        } else if (humanScore < computerScore) {
            const finalScore = `human : ${humanScore}, computer : ${computerScore}`
            playerScore.textContent = finalScore;
            finalResult.textContent = "Computer Wins";
            // alert(`Game over! Computer wins! Final score: Human ${humanScore}, Computer ${computerScore}`);
        } else {
            const finalScore = `human : ${humanScore}, computer : ${computerScore}`
            playerScore.textContent = finalScore;
            finalResult.textContent = "It's a tie";
            // alert(`Game over! It's a tie! Final score: Human ${humanScore}, Computer ${computerScore}`);
        }
    }
    
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;
        hScore.textContent = humanScore;
        cScore.textContent = computerScore;
        result.textContent = "Result: ";
    }
    
    rockBtn.addEventListener("click", () => {
        humanInput.textContent = "rock";
        computerInput.textContent = getComputerChoice(computerList);
        playRound(humanInput.textContent, computerInput.textContent);
    });

    

    paperBtn.addEventListener("click", () => {
        humanInput.textContent = "paper";
        computerInput.textContent = getComputerChoice(computerList);
        playRound(humanInput.textContent, computerInput.textContent);
    });

    
    scissorsBtn.addEventListener("click", () => {
        humanInput.textContent = "scissors";
        computerInput.textContent = getComputerChoice(computerList);
        playRound(humanInput.textContent, computerInput.textContent);
    });
    
    
    
    // for(let i=0; i<5; i++) {
    //     const userInput = prompt("Enter your choice (rock, paper, scissors:")
    //     const humanChoice = getHumanChoice(userInput);
    //     const computerChoice = getComputerChoice(computerList)
    //     playRound(humanChoice, computerChoice);
    // }
    
    // if (humanScore === computerScore) {
    //     console.log(`It's a Tie => Human score : ${humanScore}, Compter score ${computerScore}`);
    // } else if (humanScore > computerScore) {
    //     console.log(`Human wins => Human score : ${humanScore}, Compter score ${computerScore}`);
    // } else {
    //     console.log(`Computer wins => Human score : ${humanScore}, Compter score ${computerScore}`);
    // }
}

playGame();

