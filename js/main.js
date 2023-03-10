let doc = document;

let gameItemPlayer1 = doc.querySelectorAll('.player_1 .game-item');
let gameItemPlayer2 = doc.querySelectorAll('.player_2 .game-item');

let choicePlayer1 = doc.querySelector('.player_1 .player__choice-item');
let choicePlayer2 = doc.querySelector('.player_2 .player__choice-item');

let resultButton = doc.querySelector('.result__button');
let resultWinner = doc.querySelector('.result__winner');
let resetGame = doc.querySelector('.result__reset');

let gameItems = [
	'Paper',
	'Scissors',
	'Stone'
]

let paper = gameItems[0];
let scissors = gameItems[1];
let stone = gameItems[2];

runGame();

function showChoicePlayer(gameItemPlayer, choicePlayer, gameItems) {
	for (let i = 0; i < gameItemPlayer1.length; i++) {
		gameItemPlayer[i].onclick = function () {
			choicePlayer.innerText = gameItems[i];
		}
	}
}

function getResultGame(choicePlayer1, choicePlayer2) {
	resultButton.onclick = function () {
		if (choicePlayer1.innerText == paper && choicePlayer2.innerText == stone || choicePlayer1.innerText == scissors && choicePlayer2.innerText == paper || choicePlayer1.innerText == stone && choicePlayer2.innerText == scissors) {
			resultWinner.innerText = 'Player1 Win!';
		} else if (choicePlayer1.innerText == choicePlayer2.innerText) {
			resultWinner.innerText = 'Draw';
		} else {
			resultWinner.innerText = 'Player2 Win!';
		}
	}
}

function showResultGame() {

}

function resetGameValues(buttonReset, choicePlayer1, choicePlayer2, resultWinner) {
	buttonReset.onclick = function () {
		choicePlayer1.innerText = '';
		choicePlayer2.innerText = '';
		resultWinner.innerText = '';
	}
}

function runGame() {
	showChoicePlayer(gameItemPlayer1, choicePlayer1, gameItems);
	showChoicePlayer(gameItemPlayer2, choicePlayer2, gameItems);
	getResultGame(choicePlayer1, choicePlayer2);
	resetGameValues(resetGame, choicePlayer1, choicePlayer2, resultWinner);
}

// let winner = '';
// let resultText = '';
// let draw = true;
// let isCorrect = true;

// if (player1 == rock && player2 == scissors || player1 == scissors && player2 == paper || player1 == paper && player2 == rock) {
// 	winner = 'Player1';
// } else if (player2 == rock && player1 == scissors || player2 == scissors && player1 == paper || player2 == paper && player1 == rock) {
// 	winner = 'Player2';
// } else if (player1 == rock && player2 == rock || player1 == scissors && player2 == scissors || player1 == paper && player2 == paper) {
// 	draw = false;
// } else {
// 	isCorrect = false;
// }

// if (isCorrect) {
// 	resultText = 'winner: ' + winner;
// 	if (!draw) {
// 		resultText = 'Draw';
// 	}
// } else {
// 	resultText = 'Is Not Correct'
// }

// console.log(resultText);