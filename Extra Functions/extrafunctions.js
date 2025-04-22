const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerChoiceElement = document.querySelector("#computerChoice")
const yourChoiceElement = document.querySelector("#yourChoice")
const displayResults = document.querySelector("#results")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""

function computerChoose() { 
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    computerChoiceElement.innerHTML = computerChoice
    yourChoiceElement.innerHTML = yourChoice

    if (computerChoice === yourChoice) {
        displayResults.innerHTML = "Its a draw!"
    } else if (
        (computerChoice === "rock" && yourChoice === "paper") || 
        (computerChoice === "paper" && yourChoice === "scissors") || 
        (computerChoice === "scissors" && yourChoice === "rock")) {
        displayResults.innerHTML = "You win!"
    } else {
        displayResults.innerHTML = "You lose!"
    }
}

rockButton.addEventListener("click", selectRock)
function selectRock() {
    yourChoice = "rock"
    computerChoose()
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    yourChoice = "paper"
    computerChoose()
}

scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    yourChoice = "scissors"
    computerChoose()
}
