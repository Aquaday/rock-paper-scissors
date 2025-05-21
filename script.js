//definerer først alle knappene

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

//deretter alle tekst elementer
const computerChoiceElement = document.querySelector("#computerChoice")
const yourChoiceElement = document.querySelector("#yourChoice")
const displayResults = document.querySelector("#results")

//og så annet som brukes i koden
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""

//gjør at knappene fungerer med event listener.
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

function computerChoose() { 
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    computerChoiceElement.innerHTML = computerChoice
    yourChoiceElement.innerHTML = yourChoice

    if (computerChoice === yourChoice) {
        displayResults.innerHTML = "Its a draw!"

    } else if (computerChoice === "rock" && yourChoice === "paper") {
        displayResults.innerHTML = "You win!"

    } else if (computerChoice === "paper" && yourChoice === "scissors") {
        displayResults.innerHTML = "You win!"

    } else if (computerChoice === "scissors" && yourChoice === "rock") {
        displayResults.innerHTML = "You win!"

    } else {
        displayResults.innerHTML = "You lose!"
    }
}



// //lager funksjonen for at pcen skal velge
// function computerChoose() { 
//     //velger enten 0, 1 eller 2.
//     let computerChoice = choices[Math.floor(Math.random() * 3)]

//     //skriver valgene i html
//     computerChoiceElement.innerHTML = computerChoice
//     yourChoiceElement.innerHTML = yourChoice

//     //sjekker hvem som vinner
//     if (computerChoice === yourChoice) {
//         displayResults.innerHTML = "Its a draw!"
//     } else if (
//         (computerChoice === "rock" && yourChoice === "paper") || 
//         (computerChoice === "paper" && yourChoice === "scissors") || 
//         (computerChoice === "scissors" && yourChoice === "rock")) {
//         displayResults.innerHTML = "You win!"
//     } else {
//         displayResults.innerHTML = "You lose!"
//     }
// }

