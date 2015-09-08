////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput()); /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay()); /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === 'rock') {
     if (computerMove === 'scissors') {
      winner = 'player';
     }
     else if (computerMove === 'paper') {
       winner = 'computer';
     }
     else if (computerMove === 'rock') {
       winner = 'tie';
     }
     else {
       console.log("Error, invalid computer move\n");
     }
    }
    else if (playerMove === 'scissors') {
     if (computerMove === 'scissors') {
      winner = 'tie';
     }
     else if (computerMove === 'paper') {
       winner = 'player';
     }
     else if (computerMove === 'rock') {
       winner = 'computer';
     }
     else {
       console.log("Error, invalid computer move\n");
     }
    }
    else if (playerMove === 'paper') {
     if (computerMove === 'scissors') {
      winner = 'computer';
     }
     else if (computerMove === 'paper') {
       winner = 'tie';
     }
     else if (computerMove === 'rock') {
       winner = 'player';
     }
     else {
       console.log("Error, invalid computer move\n");
     }
    }
    else {
      console.log("Error, invalid player move");
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var winner;
    var playerMove;
    var computerMove;
    while (playerWins != 5 && computerWins != 5) {
      playerMove = getPlayerMove();
      console.log("Player: " + playerMove);
      computerMove = getComputerMove();
      console.log("Computer: " + computerMove);
      winner = getWinner(playerMove, computerMove);
      if (winner === 'player') {
        playerWins++;
      }
      else if (winner === 'computer') {
        computerWins++;
      }
      else {
        console.log("A tie!");
      }
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
      console.log('The score is currently player: ' + playerWins + ' computer: ' + computerWins + '\n');
    }

    return [playerWins, computerWins];
}

