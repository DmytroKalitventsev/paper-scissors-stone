let doc = document;

let gameItemPlayer1 = doc.querySelectorAll('.player_1 .game-item');
let gameItemPlayer2 = doc.querySelectorAll('.player_2 .game-item');

let choicePlayer1 = doc.querySelector('.player_1 .player__choice-item');
let choicePlayer2 = doc.querySelector('.player_2 .player__choice-item');

let counterWinnerPlayer1 = doc.querySelector('.counter__player_1 .counter__player-count');
let counterWinnerPlayer2 = doc.querySelector('.counter__player_2 .counter__player-count');

let resultButton = doc.querySelector('.result__button');
let resultWinner = doc.querySelector('.result__winner');
let resetGame = doc.querySelector('.result__reset');

let gameItems = [
	'paper',
	'scissors',
	'stone'
]
let paper = gameItems[0];
let scissors = gameItems[1];
let stone = gameItems[2];

let resultGame = {
	paper: { win: 'stone'},
	scissors: { win: 'paper'},
	stone: { win: 'scissors'}
};

let counterPlayer1 = 0;
let counterPlayer2 = 0;

startGame();

function showChoicePlayer(gameItemPlayer, choicePlayer, gameItems) {
	for (let i = 0; i < gameItemPlayer.length; i++) {
		gameItemPlayer[i].onclick = function () {
			choicePlayer.innerText = gameItems[i];
		}
	}
}

function showResultGame(choicePlayer1, choicePlayer2, resultWinner) {
	resultButton.onclick = function () {
		let itemPlayer1 = choicePlayer1.innerText;
		let itemPlayer2 = choicePlayer2.innerText;

		console.log(resultGame[itemPlayer1].win, resultGame[itemPlayer2].lose);

		if (resultGame[itemPlayer1].win == itemPlayer2) {
			resultWinner.innerText = 'Player1 Win!';
		} else {
			resultWinner.innerText = 'Player2 Win!';
		}
		if (itemPlayer1 === itemPlayer2) {
			resultWinner.innerText = 'Draw!';
		}
		if (!itemPlayer1 || !itemPlayer2) {
			resultWinner.innerText = 'Not selected';
		}
		counterWinnerPlayer();
		choicePlayer1.innerText = '';
		choicePlayer2.innerText = '';
	}
}

function counterWinnerPlayer() {
	if (resultWinner.innerText == 'Player1 Win!') {
		counterPlayer1++;
		counterWinnerPlayer1.innerText = counterPlayer1;
	}
	if (resultWinner.innerText == 'Player2 Win!') {
		counterPlayer2++;
		counterWinnerPlayer2.innerText = counterPlayer2;
	}
}

function resetGameValues(buttonReset, choicePlayer1, choicePlayer2, resultWinner) {
	buttonReset.onclick = function () {
		choicePlayer1.innerText = '';
		choicePlayer2.innerText = '';
		resultWinner.innerText = '';
		counterWinnerPlayer1.innerText = '0';
		counterWinnerPlayer2.innerText = '0';
		counterPlayer1 = 0;
		counterPlayer2 = 0;
	}
}

function startGame() {
	showChoicePlayer(gameItemPlayer1, choicePlayer1, gameItems);
	showChoicePlayer(gameItemPlayer2, choicePlayer2, gameItems);
	showResultGame(choicePlayer1, choicePlayer2, resultWinner);
	resetGameValues(resetGame, choicePlayer1, choicePlayer2, resultWinner);
}