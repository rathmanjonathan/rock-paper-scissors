const choices = ['rock','paper','scissors'];

function getComputerChoice() {
     let options = choices[Math.floor(Math.random() * 3)];
     return options;
}

function getPlayerChoice() {
    let validateInput = false;
    while(validateInput === false) {
        const choices = prompt('rock, paper, or scissors');
        if(choices === null) {
            continue;
        }
        const lowerCase = choices.toLowerCase();
        if(choices.includes(lowerCase)) {
            validateInput = true;
            return lowerCase;
        }
    }
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return 'Tie'
     }
     else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            return 'Player'
        }
        else {
            return 'Computer'
        }
        
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
      function game() {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
         const computerSelection = getComputerChoice();
         console.log(checkWinner(playerSelection, computerSelection));
         if (playRound(playerSelection, computerSelection) === 'Player') {
            playerScore++;
         }
         else if (playRound(playerSelection, computerSelection) === 'Computer') {
            computerScore++;
         }

      }
      console.log('Game Over')
      if (playerScore > computerScore) {
        console.log('Player Wins!')
      }
      else if (playerScore < computerScore) {
        console.log('Computer Wins!')
      }
      else {
        console.log('Tie!')
      }
    }
game();