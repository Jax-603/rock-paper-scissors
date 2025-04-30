//makes an array of choices to be called on
const choices =['rock','paper','scissors']

//Get computers choice randomized
function getComputerChoice()
{
 const choice = choices[Math.floor(Math.random()*choices.length)]
 return choice; 
}

//get the players choice 
function getPlayerChoice()
{
  let validatedInput = false;
  while (validatedInput == false)
  {
    const choice = prompt('rock,paper,scissors');
    if (choice == null) {continue};
    const choiceInLower = choice.toLowerCase();
    if(choices.includes(choiceInLower))
    validatedInput = true;
    return choiceInLower;
  }
}

//checks for a winner 
function checkWinner(playerSelection, computerSelection)
{
 if (playerSelection == computerSelection) 
  {
    return "Tie";
  } 
  else if(
  (playerSelection == 'rock' && computerSelection == 'scissors') ||
  (playerSelection == 'scissor' && computerSelection == 'paper') ||
  (playerSelection == 'paper' && computerSelection == 'rock'))
  {
    return 'Player';
  }
   else 
   {
    return 'Computer';
   }
}

//See who won the round 
function playRound(playerSelection,computerSelection)
{
  const result = checkWinner(playerSelection,computerSelection);
  if (result=='tie') {return 'Its a tie'}
  else if (result =='Player') {return 'You Win'}
  else 
  {return 'You lose';}
}
//initializes game, both start with score of zero, games ends on round 5 
function game()
{ let playerScore = 0;
  let computerScore = 0;
  console.log('Welcome')
  for (let i = 0; i < 5; i++)

  {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    if (checkWinner(playerSelection,computerSelection == 'Player'))
    {
    playerScore++;
   }
   else if (checkWinner(playerSelection,computerSelection == 'Computer'))
    computerScore++;
  }
  console.log('game over')
  if (playerScore < computerScore)
    {
      console.log('Player Won')
    }
  else if 
  (playerScore > computerScore)
  {
    console.log('Computer Won')
  }
}
//calls/invokes game function 
game()
