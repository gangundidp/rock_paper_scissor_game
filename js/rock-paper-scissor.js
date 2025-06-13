
let score = JSON.parse(localStorage.getItem('score'))  ||  
    {
    wins: 0,
    losses: 0,
    ties: 0
};


updateScore(); // updating scores every time..


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = ' ';
    let computerMoveImg;
    // console.log();

    if (playerMove === 'paper') {
        playerMove = document.getElementById('paper').src
        if (computerMove === 'rock') {
            computerMoveImg = document.getElementById('rock').src
            result = 'You Win.'
        } else if (computerMove === 'paper') {
            computerMoveImg = document.getElementById('paper').src
            result = 'Tie.'
        } else if (computerMove === 'scissors') {
            computerMoveImg = document.getElementById('scissor').src
            result = 'You Lose.'
        }
    } else if (playerMove === 'rock') {
        playerMove = document.getElementById('rock').src
        if (computerMove === 'rock') {
            computerMoveImg = document.getElementById('rock').src
            result = 'Tie.'
        }  else if (computerMove === 'paper') {
            computerMoveImg = document.getElementById('paper').src
            result = 'You Lose.'
        } else if (computerMove === 'scissors') {
            computerMoveImg = document.getElementById('scissor').src
            result = 'You Win.'
        }
    } else if (playerMove === 'scissor') {
        playerMove = document.getElementById('scissor').src
        if (computerMove === 'rock') {
            computerMoveImg = document.getElementById('rock').src
        result = 'You Lose.'
    } else if (computerMove === 'paper') {
            computerMoveImg = document.getElementById('paper').src
         result = 'You Win.'
    } else if (computerMove === 'scissors') {
            computerMoveImg = document.getElementById('scissor').src
        result = 'Tie.'
    }
    }

    
    // updating score
    if (result === 'You Win.'){
        score.wins++;
    } else if (result === 'You Lose.') {
        score.losses++;
    }  else if (result === 'Tie.') {
        score.ties++;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    
    // document.querySelectorAll('result-moves').style.margin = "1rem";
    document.getElementById('result').innerText = result;
    
    document.getElementById('moves').innerHTML = `Your move is  <img src="${playerMove}" height='50px' width='50px'>  -  <img src="${computerMoveImg}" height='50px' width='50px'> is computer's move`;
    
    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    // Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`);

}


function updateScore() {
    const scoreCard = document.getElementById('score-card');
    scoreCard.innerText = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}


function pickComputerMove() {
    const randonNumber = Math.random();

    let computerMove = ' ';

    if (randonNumber >= 0 && randonNumber < 1 / 3) {
        computerMove = 'rock'
    } else if (randonNumber >= 1 / 3 && randonNumber < 2/3) {
        computerMove = 'paper';
    } else if (randonNumber >= 2 / 3 && randonNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}

 
