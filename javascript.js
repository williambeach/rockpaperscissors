/* function computerPlay() will randomly generate rock, paper, or scissors
and return it as a string*/




/*function computerPlay() {
    randomNum = Math.floor((Math.random() * 1000));
    return (randomNum >= 0 && randomNum <= 333) ? 'rock' : (randomNum > 333 &&
        randomNum <= 666) ? 'paper' : 'scissors';
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    alert("Hello and welcome to....");
    alert("ROCK, PAPER, SCISSORSSSSSSSSS...Best of 5 rounds!!!!");
    for (i = 0; i < 5; i++) {
        computerAnswer = computerPlay();
        userInput = prompt("Please enter: rock, paper, or scissors.");
        userInput = userInput.toLowerCase()
        while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
            userInput = prompt('That was not an answer, please enter "rock", "paper", or "scissors."');
        }
    
        if (computerAnswer == 'rock' && userInput == 'scissors') {
            computerScore += 1;
            alert("Computer played Rock, rock beats scissors, you lost this round");
            
        } else if (computerAnswer == 'rock' && userInput == 'paper') {
            humanScore += 1;
            alert("Computer played Rock, but paper beats rock, you won this round");
            
        } else if (computerAnswer == 'rock' && userInput == 'rock') {
            alert("Computer played Rock, you played rock, it's a tie");
            
        } else if (computerAnswer == 'paper' && userInput == 'rock') {
            computerScore += 1;
            alert("Computer played paper, paper beats rock, you lost this round");
            
        } else if (computerAnswer == 'paper' && userInput == 'scissors') {
            humanScore += 1;
            alert("Computer played paper, scissors beat paper, you won this round");
            
        } else if (computerAnswer == 'paper' && userInput == 'paper') {
            alert("Computer played paper, you played paper, it's a tie");
            
        } else if (computerAnswer == 'scissors' && userInput == 'rock') {
            humanScore += 1
            alert('Computer played scissor, rock beats scissor, you win this round');
            
        } else if (computerAnswer == 'scissors' && userInput == 'paper') {
            computerScore += 1;
            alert('Computer played scissors, scissors beats paper, you lost this round');
            
        } else if (computerAnswer == 'scissors' && userInput == 'scissors') {
            alert("Computer played scissors, you played scissors, it's a tie");
            
        }
        
    }
    alert(`Computer Score: ${computerScore} Human Score: ${humanScore}`);
    if (computerScore > humanScore) {
        alert('Better luck next time...');
    } else if (computerScore == humanScore) {
        alert('You tied, oh well...')
    } else {
        alert('CONGRATULATIONS');
    }
}

playGame();*/



