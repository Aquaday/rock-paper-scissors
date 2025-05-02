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

let cash = 1000
let cost = 20
let cashElement = document.querySelector("#cashEl")
const resetCost = document.querySelector("#resetCost")
const times2 = document.querySelector("#times2")
const times3 = document.querySelector("#times3")
const times5 = document.querySelector("#times5")
const times10 = document.querySelector("#times10")
const allIn = document.querySelector("#allIn")
const currentCost = document.querySelector("#currentCost")
currentCost.innerHTML = cost

function getHistory() {
    if (localStorage.getItem("Wins") !== null) {

        let totalCounterStorage = localStorage.getItem("Total");
        let winCounterStorage = localStorage.getItem("Wins");
        let drawCounterStorage = localStorage.getItem("Draws");
        let lossCounterStorage = localStorage.getItem("Losses");
        let cashStorage = localStorage.getItem("Cash")

        totalCounter = JSON.parse(totalCounterStorage)
        winCounter = JSON.parse(winCounterStorage)
        drawCounter = JSON.parse(drawCounterStorage)
        lossCounter = JSON.parse(lossCounterStorage)
        cash = JSON.parse(cashStorage)

        totalCounterEl.innerHTML = totalCounter
        winCounterEl.innerHTML = winCounter
        drawCounterEl.innerHTML = drawCounter
        lossCounterEl.innerHTML = lossCounter
        cashElement.innerHTML = cash


    }
}

getHistory()

resetCost.addEventListener("click", () => {
    cost = 20
    currentCost.innerHTML = cost
})

times2.addEventListener("click", () => {
    cost = cost * 2
    currentCost.innerHTML = cost
})

times3.addEventListener("click", () => {
    cost = cost * 3
    currentCost.innerHTML = cost
})

times5.addEventListener("click", () => {
    cost = cost * 5
    currentCost.innerHTML = cost
})

times10.addEventListener("click", () => {
    cost = cost * 10
    currentCost.innerHTML = cost
})

allIn.addEventListener("click", () => {
    cost = cash
    currentCost.innerHTML = cost
})

rockButton.addEventListener("click", selectRock)
function selectRock() {
    if (played === false && (cash - cost) >= 0) {

    rockButton.setAttribute('class', 'rock')
    setTimeout ( () => {rockButton.classList.add("rockAttack")}, 2000)
    yourChoice = "rock"
    computerChoose()
}
}

paperButton.addEventListener("click", selectPaper)
function selectPaper() {
    if (played === false && (cash - cost) >= 0) {
    paperButton.setAttribute('class', 'paper')
    setTimeout ( () => {paperButton.classList.add("paperAttack")}, 2000)
    yourChoice = "paper"
    computerChoose()
}
}



scissorsButton.addEventListener("click", selectScissors)
function selectScissors() {
    if (played === false && (cash - cost) >= 0) {
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
                cash = cash + cost

            } else {
                // if loss, add fireImage to yourChoiceArea if loss
                yourChoiceArea.appendChild(fireImage)
                lossCounter += 1
                cash = cash - cost

            }
            totalCounter = winCounter - lossCounter
            totalCounterEl.innerHTML = totalCounter
            winCounterEl.innerHTML = winCounter
            drawCounterEl.innerHTML = drawCounter
            lossCounterEl.innerHTML = lossCounter
            cashElement.innerHTML = cash
            localStorage.setItem("Total", totalCounter );
            localStorage.setItem("Wins", winCounter );
            localStorage.setItem("Draws", drawCounter );
            localStorage.setItem("Losses", lossCounter );
            localStorage.setItem("Cash", cash)




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

const clearHistoryButton = document.querySelector("#clearHistory")

clearHistoryButton.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})
