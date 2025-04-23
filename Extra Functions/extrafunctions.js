const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const computerRockButton = document.querySelector("#computerRock")
const computerPaperButton = document.querySelector("#computerPaper")
const computerScissorsButton = document.querySelector("#computerScissors")
const choices = ["rock", "paper", "scissors"]
let yourChoice = ""
let played = false
let fireImage = document.createElement("img")
    fireImage.src = "/With Animation/images/fire.png"
const yourChoiceArea = document.querySelector(".yourChoice")
const computerChoiceArea = document.querySelector(".computerChoice")

let totalCounterEl = document.querySelector("#totalCounter")
let winCounterEl = document.querySelector("#winCounter")
let drawCounterEl = document.querySelector("#drawCounter")
let lossCounterEl = document.querySelector("#lossCounter")

let totalCounter = 0
let winCounter = 0
let drawCounter = 0
let lossCounter = 0

function getHistory() {
    if (localStorage.getItem("Wins") !== null) {

        totalCounter = localStorage.getItem("Total");
        winCounter = localStorage.getItem("Wins");
        drawCounter = localStorage.getItem("Draws");
        lossCounter = localStorage.getItem("Losses");

        console.log(lossCounter)

        totalCounterEl.innerHTML = totalCounter
        winCounterEl.innerHTML = winCounter
        drawCounterEl.innerHTML = drawCounter
        lossCounterEl.innerHTML = lossCounter
    }
}

getHistory()

rockButton.addEventListener("click", selectRock)
function selectRock() {
    if (played === false) {

    rockButton.setAttribute('class', 'rock')
    setTimeout ( () => {rockButton.classList.add("rockAttack")}, 2000)
    yourChoice = "rock"
    computerChoose()
}
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if (played === false) {
    paperButton.setAttribute('class', 'paper')
    setTimeout ( () => {paperButton.classList.add("paperAttack")}, 2000)
    yourChoice = "paper"
    computerChoose()
}
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if (played === false) {
    scissorsButton.setAttribute('class', 'scissors')
    setTimeout ( () => {scissorsButton.classList.add("scissorsAttack")}, 2000)
    yourChoice = "scissors"
    computerChoose()
}
}

function computerChoose() { 
    played = true
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
                // If draw, do nothing
                drawCounter += 1

            } else if (
                // if win, add fireImage to computerChoiceArea
                (computerChoice === "rock" && yourChoice === "paper") || 
                (computerChoice === "paper" && yourChoice === "scissors") || 
                (computerChoice === "scissors" && yourChoice === "rock")) {
                computerChoiceArea.appendChild(fireImage)
                winCounter += 1
                

            } else {
                // if loss, add fireImage to yourChoiceArea if loss
                yourChoiceArea.appendChild(fireImage)
                lossCounter += 1


            }
            totalCounter = winCounter - lossCounter
            totalCounterEl.innerHTML = totalCounter
            winCounterEl.innerHTML = winCounter
            drawCounterEl.innerHTML = drawCounter
            lossCounterEl.innerHTML = lossCounter
            localStorage.setItem("Total", totalCounter );
            localStorage.setItem("Wins", winCounter );
            localStorage.setItem("Draws", drawCounter );
            localStorage.setItem("Losses", lossCounter );



            // Rests classes to start
            setTimeout( () => {
                rockButton.setAttribute('class', '')
                paperButton.setAttribute('class', '')
                scissorsButton.setAttribute('class', '')
                computerRockButton.setAttribute('class', '')
                computerPaperButton.setAttribute('class', '')
                computerScissorsButton.setAttribute('class', '')
                computerChoiceArea.innerHTML = ""
                yourChoiceArea.innerHTML = ""
                played = false
            },  1000)
        }, 2500)
        

        
        
    
}