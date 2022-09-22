const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
console.log(rock)

   function getComputerChoice() {
     let computerChoices = Math.floor(Math.random() * 3);
     let computerChoice;
     switch(computerChoices) {
        case 0:
            computerChoice = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
     }
     return computerChoice;
    }


function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
    pScore.textContent = "PLAYER:" + pScore.dataset.score;
    roundWinner = 'player';
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
    cScore.textContent = "COMPUTER:" + cScore.dataset.score;
    roundWinner = 'computer';
  }
  console.log("Computer: " + computerSelection + ", Player: " + playerSelection + ", Winner: " + roundWinner + ".");
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}


    
    
    function checkWinner(playerSelection, computerSelection) {
            const result = playRound(playerSelection, computerSelection);
            if (result === 'Tie') {
                return `It\s a Tie! ${playerSelection} matches ${computerSelection}`
            }
            else if (result === 'Player') {
                return `You Win! ${playerSelection} beats ${computerSelection}`
            }
            else {
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            }
        }
   
