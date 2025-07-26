let humanScore = 0
let computerScore = 0
let round = 1

let rockOn = false
let paperOn = false
let scissorOn = false

const gameContainer = document.querySelector("#Game")
const startMessage = document.createElement("p")
const humanChoiceMessage = document.createElement("p")
const computerChoiceMessage = document.createElement("p")
const Winner = document.createElement("p")

function getComputerChoice (){
    let list_of_choice = ['rock','paper','scissor']
    x = Math.floor(Math.random() * (3))
    return list_of_choice[x]
}

function getHumanChoice(){
    if (rockOn){
        rockOn = false
        return 'rock'
    }
    if (paperOn){
        paperOn = false
        return 'paper'
        
    }
    if (scissorOn){
        scissorOn = false
        return 'scissor'
    }
}

function playRound(){
    startMessage.innerText = '--- The game has started --- '+ '  round: '+ round
    setTimeout(() => {
    gameContainer.appendChild(startMessage)
}, 100);

    const humanChoice = getHumanChoice().toLocaleLowerCase()
    humanChoiceMessage.innerText = "you choose  " + humanChoice
    setTimeout(() => {
    gameContainer.appendChild(humanChoiceMessage)
}, 500);

    const computerChoice = getComputerChoice()
    computerChoiceMessage.innerText = "computer choose  " + computerChoice
    setTimeout(() => {
    gameContainer.appendChild(computerChoiceMessage)
}, 1000);

    if (humanChoice == computerChoice){
        Winner.innerText = "---Tie---!!"
        setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);

    }
    else if (computerChoice == 'rock'){
        if (humanChoice == 'paper'){
            Winner.innerText = '--- You win!! paper beats rock! ---'
        setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);
            humanScore ++
        }
        else if (humanChoice == 'scissor'){
            Winner.innerText = '--- You loose!! rock beats scissor ---'
                    setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);
            computerScore ++
        }
    }
    else if (computerChoice == 'paper'){
        if (humanChoice == 'rock'){
            Winner.innerText = '--- You loose!! paper beats rock! ---'
                    setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);
            computerScore ++
        }
        else if (humanChoice == 'scissor'){
            Winner.innerText = '--- You win!! scissor beats paper ---'
                    setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 500);
            humanScore ++
        }
    }
    else if (computerChoice == 'scissor'){
        if (humanChoice == 'paper'){
            Winner.innerText = '--- You loose!! scissor beats paper! ---'
                    setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);
            computerScore ++
        }
        else if (humanChoice == 'rock'){
            Winner.innerText = '--- You win!! rock beats scissor ---'
                    setTimeout(() => {
        gameContainer.appendChild(Winner)
}, 1500);
            humanScore ++
        }
    }
    round ++

    setTimeout(() => {
        gameContainer.removeChild(startMessage)
        gameContainer.removeChild(computerChoiceMessage)
        gameContainer.removeChild(humanChoiceMessage)
        gameContainer.removeChild(Winner)
}, 3000);
}

function playGame(){
    game = playRound()
    if ((computerScore || humanScore) == 5){
        const TheWinner = document.createElement("p")
        if (computerScore > humanScore){
            TheWinner.innerText = "YOU LOSE!! TRY AGAIN"
            setTimeout(() => {
            gameContainer.appendChild(TheWinner)
}, 1500);
        }
        else{
            TheWinner.innerText = "GOOD JOB!! KEEP IT UP"
            setTimeout(() => {
            gameContainer.appendChild(TheWinner)
}, 1500);
setTimeout(() => {
            container.removeChild(scissor)
            container.removeChild(rock)
            container.removeChild(paper)
}, 2000);
        }
}
}

const rock = document.createElement("button")
const paper = document.createElement("button")
const scissor = document.createElement("button")

rock.innerText = "rock"
paper.innerText = "paper"
scissor.innerText = "scissor"


rock.addEventListener("click", () => {
  rockOn = true;
  playGame();
});

paper.addEventListener("click", () => {
  paperOn = true;
  playGame();
});

scissor.addEventListener("click", () => {
  scissorOn = true;
  playGame();
});


const container = document.querySelector("#container")
container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissor)


