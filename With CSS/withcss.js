const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerChoiceElement = document.querySelector("#computerChoice")
const yourChoiceElement = document.querySelector("#yourChoice")
const displayResults = document.querySelector("#results")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""
let played = false


rockButton.addEventListener("click", selectRock)
function selectRock() {
    if ((yourChoice === "paper" || yourChoice === "scissors") && played === true) {
    document.querySelector(".activeButton").classList.remove("activeButton")
    } else if {}
    paperButton.classList.add("activeButton")
    yourChoice = "rock"
    computerChoose()
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if ((yourChoice === "rock" || yourChoice === "scissors") && played === true) {
    document.querySelector(".activeButton").classList.remove("activeButton")
    } 
    paperButton.classList.add("activeButton")
    yourChoice = "paper"
    computerChoose()
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if ((yourChoice === "rock" || yourChoice === "paper") && played === true) {
    document.querySelector(".activeButton").classList.remove("activeButton")
    } 
    paperButton.classList.add("activeButton")
    yourChoice = "scissors"
    computerChoose()
}

// paperButton.addEventListener("click", selectPaper)
// function selectPaper() {
//     let checkActive = document.querySelector(".activeButton")
//     if (checkActive.classList.contains(activeButton) === true){
//         checkActive.classList.remove(activeButton)
//     }else {
//     paperButton.classList.add("activeButton")
//     yourChoice = "paper"
//     computerChoose()
// }
    
// }

// scissorsButton.addEventListener("click", selectScissors)
// function selectScissors() {
//     scissorsButton.classList.add("activeButton")
//     yourChoice = "scissors"
//     computerChoose()
// }

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
    played = true
}