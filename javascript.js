/* function computerPlay() will randomly generate rock, paper, or scissors
and return it as a string*/


let round = 1;
let counter = 0;
alienScore = 0;
humanScore = 0;
alienMove = "";
humanMove = "";

const startButton = document.getElementById('start_button'); //find startButton in html
const header = document.getElementById('head');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const humanScreenScore = document.getElementById('humanScore');
const alienScreenScore = document.getElementById('alienScore');
const choices = document.querySelectorAll('.choices');



function start() {
    function showDiv () { //this will show scoreboard and buttons once start button is clicked
        document.getElementById("appear").style.display = "Block";}
    function playUfo () { //this will start ufo sound wav once start button is clicked
        const audio = document.querySelector('audio[data-key="ufo"]');
        audio.play();}
    startButton.addEventListener('click', () => { //listen for startButton click and execute the following functions:
        playUfo();
        showDiv();
        startButton.textContent = `Round ${round}`;
        humanScreenScore.textContent = `${humanScore}`;
        alienScreenScore.textContent = `${alienScore}`;
    });
}

function getAlienMove() { 
    randomNum = Math.floor((Math.random() * 1000));
    return (randomNum >= 0 && randomNum <= 333) ? 'rock' : (randomNum > 333 &&
        randomNum <= 666) ? 'paper' : 'scissors';
}


function setRound() {
    startButton.textContent = `Round ${round}`;   
}

function updateRound() {
    round += 1;
    setTimeout(setRound, 2600);
}
     
    
function fillHeader() {
    header.textContent = "ROCK PAPER SCISSORS AGAINST PESKY ALIENS";
}

function headerWin() {
    header.textContent = `The aliens played ${alienMove}. Excellent choice, we may be saved afterall...`;
    setTimeout(fillHeader,2500);
}

function headerLose() {
    header.textContent = `The aliens played ${alienMove}. You lost this round...`;
    setTimeout(fillHeader,2500);
    }


function headerTie() {
    header.textContent = `The aliens and you both played ${alienMove}. It's a tie.`;
    setTimeout(fillHeader,2500);
    }


function pointHumans() {
    humanScore += 1;
    humanScreenScore.textContent = `${humanScore}`;
}

function pointAliens () {
    alienScore += 1;
    alienScreenScore.textContent = `${alienScore}`;
}

function endGame() {
    startButton.style.display = "none";
    header.textContent = `Final Score ** Humans: ${humanScore} ** Aliens: ${alienScore}`;
    document.querySelector('.buttons').style.display = "none";
}



start();

async function waitForClick() {
    return new Promise(resolve => {
        for (let i=0; i<choices.length;i++) {
            choices[i].addEventListener('click', resolve);
        }
        });
}
    
async function playGame() {
    for (let i = 0; i < 4; ++i) {
        alienMove = getAlienMove();
        value = await waitForClick();
        userInput = value.target.id;
        if (userInput == alienMove) {
            headerTie();
        } else if (userInput == 'rock' && alienMove == 'paper') {
            headerLose();
            pointAliens();
        } else if (userInput == 'paper' && alienMove == 'scissors') {
            headerLose();
            pointAliens();
        } else if (userInput == 'scissors' && alienMove == 'rock') {
            headerLose();
            pointAliens();
        } else {
            headerWin();
            pointHumans();
        }
        updateRound();
    }
}





playGame();





















/*function playGame() {
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



