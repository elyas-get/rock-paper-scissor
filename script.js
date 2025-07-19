let humanScore = 0
let computerScore = 0
round = 1

function getComputerChoice (){
    let list_of_choice = ['rock','paper','scissor']
    x = Math.floor(Math.random() * (3))
    return list_of_choice[x]
}

function getHumanChoice(){
    return  prompt("Choose from Rock, Paper or Scissor");
}

function playRound(){
    alert('--- The game has started --- '+ '  round: '+round)
    const humanChoice = getHumanChoice().toLocaleLowerCase()
    alert("you choose  "+humanChoice)

    const computerChoice = getComputerChoice()
    alert("computer choose  "+computerChoice)

    if (humanChoice == computerChoice){
        alert("---Tie---!!")
    }
    else if (computerChoice == 'rock'){
        if (humanChoice == 'paper'){
            alert('--- You win!! paper beats rock! ---')
            humanScore ++
        }
        else if (humanChoice == 'scissor'){
            alert('--- You loose!! rock beats scissor ---')
            computerScore ++
        }
    }
    else if (computerChoice == 'paper'){
        if (humanChoice == 'rock'){
            alert('--- You loose!! paper beats rock! ---')
            computerScore ++
        }
        else if (humanChoice == 'scissor'){
            alert('--- You win!! scissor beats paper ---')
            humanScore ++
        }
    }
    else if (computerChoice == 'scissor'){
        if (humanChoice == 'paper'){
            alert('--- You loose!! scissor beats paper! ---')
            computerScore ++
        }
        else if (humanChoice == 'rock'){
            alert('--- You win!! rock beats scissor ---')
            humanScore ++
        }
    }
    alert('--- round: '+round + ' ---' + '  human: ' + humanScore + '   -  ' + ' computer: ' + computerScore)
    round ++
}

function playGame(){
    let game = playRound()
    if (round == 6){
        if (computerScore > humanScore){
            alert('YOU LOSE!!! TRY AGAIN')
        }
        else(
            alert('CONGRATS!!!!! YOU ARE UNSTOPPABLE!!!!')
        )
    }
}
playGame()
playGame()
playGame()
playGame()
playGame()
