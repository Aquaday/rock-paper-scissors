const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerChoiceElement = document.querySelector("#computerChoice")
const displayResults = document.querySelector("#results")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""
let played = false


rockButton.addEventListener("click", selectRock)
function selectRock() {
    if (played === true) {
        paperButton.setAttribute('class', 'paperStyle')
        scissorsButton.setAttribute('class', 'scissorsStyle')
    } 
    rockButton.classList.add("activeButton")
    yourChoice = "rock"
    computerChoose()
    
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if (played === true) {
        rockButton.setAttribute('class', 'rockStyle')
        scissorsButton.setAttribute('class', 'scissorsStyle')
    } 
    paperButton.classList.add("activeButton")
    yourChoice = "paper"
    computerChoose()
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if (played === true) {
        paperButton.setAttribute('class', 'paperStyle')
        rockButton.setAttribute('class', 'rockStyle')
    } 
    scissorsButton.classList.add("activeButton")
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
    computerChoiceElement.innerHTML = ""
    displayResults.innerHTML = ""
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    if (played === true) {
        displayResults.setAttribute("class", "")
        computerChoiceElement.setAttribute("class", "")
        } 
    setTimeout( () => {
        computerChoiceElement.innerHTML = computerChoice
        if (computerChoice === "rock") {
            computerChoiceElement.classList.add("rockStyle")
            
        } else if (computerChoice === "paper") {
            computerChoiceElement.classList.add("paperStyle")
            
        } else if (computerChoice === "scissors") {
            computerChoiceElement.classList.add("scissorsStyle")
        }}, 1000)
    
    

        setTimeout( () => {
            if (computerChoice === yourChoice) {
            displayResults.innerHTML = "Its a draw!"
            displayResults.classList.add("draw")
        } else if (
            (computerChoice === "rock" && yourChoice === "paper") || 
            (computerChoice === "paper" && yourChoice === "scissors") || 
            (computerChoice === "scissors" && yourChoice === "rock")) {
            displayResults.innerHTML = "You win!"
            displayResults.classList.add("won")
        } else {
            displayResults.innerHTML = "You lose!"
            displayResults.classList.add("lose")
        }}, 2000)
    
    played = true
}