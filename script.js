//makes an array of choices to be called on
const choices =['rock','paper','scissors']
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultsDiv = document.querySelector('.results')
let playerScore = 0;
let computerScore = 0;
let playerScoreP = document.querySelector('.player-score')
let computerScoreP = document.querySelector('.computer-score')



//Get computers choice randomized
const getComputerChoice = () =>
{
 const choice = choices[Math.floor(Math.random()*choices.length)]
 return choice; 
}
//plays the round between human and computer, tells you who won depending on what you pick
const playRound = (playerSelection, computerSelection) => {
 if (playerSelection == computerSelection) {
  const p = document.createElement('p')
  p.innerText = 'You tied. Both players picked the same thing.'
  resultsDiv.appendChild(p)
 }
  else if(playerSelection == 'rock' && computerSelection == 'scissors') 
  {playerScore++
  const p = document.createElement('p')
  p.innerText = 'You win. Human Player picked rock'
  resultsDiv.appendChild(p)
  }
  else if 
  (playerSelection == 'scissors' && computerSelection == 'paper')
  {playerScore++
  const p = document.createElement('p')
  p.innerText = 'You win. Human Player picked scissors'
  resultsDiv.appendChild(p)
  }
  else if
  (playerSelection == 'paper' && computerSelection == 'rock')
  {
    playerScore++
     const p = document.createElement('p')
    p.innerText = 'You win. Human Player picked paper'
    resultsDiv.appendChild(p)
  }

  else if(playerSelection == 'rock' && computerSelection == 'paper') 
    {computerScore++
    const p = document.createElement('p')
    p.innerText = 'You lose. Computer Player picked paper'
    resultsDiv.appendChild(p)
    }
    else if 
    (playerSelection == 'scissors' && computerSelection == 'rock')
    {computerScore++
    const p = document.createElement('p')
    p.innerText = 'You lose. computer Player picked rock'
    resultsDiv.appendChild(p)
    }
    else if
    (playerSelection == 'paper' && computerSelection == 'scissors')
    {
      computerScore++
       const p = document.createElement('p')
      p.innerText = 'You lose. computer Player picked scissors'
      resultsDiv.appendChild(p)
    }
}
// keeps a running score during the game and displays a message whether you won or lost 
const runningScore = (playerScore,computerScore) =>{
  if (playerScore == 5){
    const h2 = document.createElement('h2')
    h2.innerText = 'Player reached 5 points, You win!'
    resultsDiv.appendChild(h2)
  }
    else if (computerScore == 5){
   const h2 = document.createElement('h2')
    h2.innerText = 'computer reached 5 points, You Lose!'
    resultsDiv.appendChild(h2)
  }
}

function updateScores(playerScore,computerScore){
  playerScoreP.innerText = 'player score:' + playerScore
  computerScoreP.innerText = 'Computer score:' + computerScore

}
//event listeners for button clicks and will start the playround, updatescore, and runningscore function 
rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock'
  playRound(playerSelection,computerSelection)
  updateScores(playerScore,computerScore)
  runningScore(playerScore,computerScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper'
  playRound(playerSelection,computerSelection)
  updateScores(playerScore,computerScore)
  runningScore(playerScore,computerScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors'
  playRound(playerSelection,computerSelection)
  updateScores(playerScore,computerScore)
  runningScore(playerScore,computerScore)
})






