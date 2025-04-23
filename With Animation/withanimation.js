const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerRockButton = document.querySelector("#computerRock")
const computerPaperButton = document.querySelector("#computerPaper")
const computerScissorsButton = document.querySelector("#computerScissors")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""
let played = false
let selected = false
let createImage = document.createElement("img")
    createImage.src = "/With Animation/images/fire.png"
const yourChoiceArea = document.querySelector(".yourChoice")
const computerChoiceArea = document.querySelector(".computerChoice")

rockButton.addEventListener("click", selectRock)

function selectRock() {
    if (selected === false) {
        if (played === true) {
            rockButton.setAttribute('class', '')
            paperButton.setAttribute('class', '')
            scissorsButton.setAttribute('class', '')
            computerRockButton.setAttribute('class', '')
            computerPaperButton.setAttribute('class', '')
            computerScissorsButton.setAttribute('class', '')
    } 
    rockButton.setAttribute('class', 'rock')
    setTimeout ( () => {rockButton.classList.add("rockAttack")}, 2000)
    yourChoice = "rock"
    selected = true
    
     
    computerChoose()
}
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if (selected === false) {
        if (played === true) {
            rockButton.setAttribute('class', '')
            paperButton.setAttribute('class', '')
            scissorsButton.setAttribute('class', '')
            computerRockButton.setAttribute('class', '')
            computerPaperButton.setAttribute('class', '')
            computerScissorsButton.setAttribute('class', '')
    } 
    paperButton.setAttribute('class', 'paper')
    setTimeout ( () => {paperButton.classList.add("paperAttack")}, 2000)
    yourChoice = "paper"
    selected = true
    computerChoose()
}
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if (selected === false) {
    if (played === true) {
        rockButton.setAttribute('class', '')
        paperButton.setAttribute('class', '')
        scissorsButton.setAttribute('class', '')
        computerRockButton.setAttribute('class', '')
        computerPaperButton.setAttribute('class', '')
        computerScissorsButton.setAttribute('class', '')
    } 
    scissorsButton.setAttribute('class', 'scissors')
    setTimeout ( () => {scissorsButton.classList.add("scissorsAttack")}, 2000)
    yourChoice = "scissors"
    selected = true
    computerChoose()
}
}

function computerChoose() { 
    computerChoiceArea.innerHTML = ""
    yourChoiceArea.innerHTML = ""
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    setTimeout( () => {
        if (computerChoice === "rock") {
            computerRockButton.classList.add("computerRock")
            setTimeout ( () => {computerRockButton.classList.add("computerRockAttack")}, 1000)
            
        } else if (computerChoice === "paper") {
            computerPaperButton.classList.add("computerPaper")
            setTimeout ( () => {computerPaperButton.classList.add("computerPaperAttack")}, 1000)
        } else if (computerChoice === "scissors") {
            computerScissorsButton.classList.add("computerScissors")
            setTimeout ( () => {computerScissorsButton.classList.add("computerScissorsAttack")}, 1000)
        }}, 1000)


        setTimeout( () => {
            if (computerChoice === yourChoice) {

        } else if (
            (computerChoice === "rock" && yourChoice === "paper") || 
            (computerChoice === "paper" && yourChoice === "scissors") || 
            (computerChoice === "scissors" && yourChoice === "rock")) {
            computerChoiceArea.appendChild(createImage)
            

        } else {
            yourChoiceArea.appendChild(createImage)


        }}, 2500)
    
    played = true
    selected = false
}