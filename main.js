//Initialises player score variables
var playerOneScore = 0;
var playerTwoScore = 0;

//Function for player 1 to input choice
function playerInput() {
	var input = prompt('Enter r(ock), p(aper) or s(cissors)');
	return input;
}

//Function for calculating the score
function calculatingScore(oneChoice, twoChoice) {
	if (oneChoice === 'r') {
		if (twoChoice === 's') {
			playerOneScore++;
		}
	} else if (oneChoice === 's') {
		if (twoChoice === 'r') {
			playerTwoScore++;
		}
	} else if (oneChoice === 's') {
		if (twoChoice === 'p') {
			playerOneScore++;
		}
	} else if (twoChoice ==='s') {
		if (oneChoice === 'p') {
			playerTwoScore++;
		}
	} else if (oneChoice === 'r') {
		if (twoChoice === 'p') {
			playerTwoScore++;
		} 
	} else if (twoChoice === 'r') {
		if (oneChoice === 'p') {
			playerOneScore++;
		}
	} else {
		playerOneScore += 0;
		playerTwoScore += 0;
	}
}

//Function for generating a random choice for Player 2
function randomChoice() {
	var rand = Math.floor(Math.random() * 3);
	if (rand === 0) {
		return playerTwoChoice ='r';
	} else if (rand === 1) {
		return playerTwoChoice = 's';
	} else {
		return playerTwoChoice = 'p';
	}
}

//Function which allows the game to be played 3 times and displays scores and the winner
function playGame() {
	var count = 1;

	while (count < 4) {
		var playerOneChoice = playerInput();
		var playerTwoChoice = randomChoice();
		calculatingScore(playerOneChoice, playerTwoChoice);
		alert('Player 1 score: ' + playerOneScore);
		alert('Player 2 score: ' + playerTwoScore);
		count++;
	}

	if (playerOneScore > playerTwoScore) {
		alert('Player 1 wins');
	} else {
		alert('Player 2 wins');
	}
}

playGame();






