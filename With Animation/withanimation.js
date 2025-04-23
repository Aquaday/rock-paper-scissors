const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerChoiceElement = document.querySelector("#computerChoice")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""
let played = false
let selected = false


rockButton.addEventListener("click", selectRock)

function selectRock() {
    if (selected === false) {
        if (played === true) {
        rockButton.setAttribute('class', '')
        paperButton.setAttribute('class', '')
        scissorsButton.setAttribute('class', '')
    } 
    rockButton.setAttribute('class', 'rock')
    yourChoice = "rock"
    selected = true
}
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if (selected === false) {
        if (played === true) {
        rockButton.setAttribute('class', '')
        paperButton.setAttribute('class', '')
        scissorsButton.setAttribute('class', '')
    } 
    paperButton.setAttribute('class', 'paper')
    yourChoice = "paper"
    selected = true
}
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if (selected === false) {
    if (played === true) {
        rockButton.setAttribute('class', '')
        paperButton.setAttribute('class', '')
        scissorsButton.setAttribute('class', '')
    } 
    scissorsButton.setAttribute('class', 'scissors')
    yourChoice = "scissors"
    selected = true
}
}

function computerChoose() { 
    computerChoiceElement.innerHTML = ""
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    if (played === true) {
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

                
        } else if (
            (computerChoice === "rock" && yourChoice === "paper") || 
            (computerChoice === "paper" && yourChoice === "scissors") || 
            (computerChoice === "scissors" && yourChoice === "rock")) {
        } else {


        }}, 2000)
    
    played = true
    selected = false
}