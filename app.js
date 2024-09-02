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

function playGame() {
// human and computer score
    let humanScore = 0;
    let computerScore = 0;

    // play round
    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            console.log(`human choice : "${humanChoice}", computer choice : "${computerChoice}" => it's a tie`); 

        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`human choice : "${humanChoice}", computer choice : "${computerChoice}" => human wins`); 
            humanScore += 1;
        } else {
            console.log(`human choice : "${humanChoice}", computer choice : "${computerChoice}" => computer wins`);
            computerScore += 1;
        }
    }

    for(let i=0; i<5; i++) {
        const userInput = prompt("Enter your choice (rock, paper, scissors:")
        playRound(getHumanChoice(userInput), getComputerChoice(computerList))
    }
    
    if (humanScore === computerScore) {
        console.log(`It's a Tie => Human score : ${humanScore}, Compter score ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`Human wins => Human score : ${humanScore}, Compter score ${computerScore}`);
    } else {
        console.log(`Computer wins => Human score : ${humanScore}, Compter score ${computerScore}`);
    }
}

playGame();

