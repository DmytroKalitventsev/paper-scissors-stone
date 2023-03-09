let doc = document;

let paperPlayer1 = doc.querySelector('.player_1 .game-item_paper');
let scissorsPlayer1 = doc.querySelector('.player_1 .game-item_scissors');
let stonePlayer1 = doc.querySelector('.player_1 .game-item_stone');

let paperPlayer2 = doc.querySelector('.player_2 .game-item_paper');
let scissorsPlayer2 = doc.querySelector('.player_2 .game-item_scissors');
let stonePlayer2 = doc.querySelector('.player_2 .game-item_stone');

let choicePlayer1 = doc.querySelector('.player_1 .player__choice-item');
let choicePlayer2 = doc.querySelector('.player_2 .player__choice-item');

let resultButton = doc.querySelector('.result__button');
let resultWinner = doc.querySelector('.result__winner');
let resetGame = doc.querySelector('.result__reset');

let paper = 'Paper';
let scissors = 'Scissors';
let stone = 'Stone';

paperPlayer1.onclick = function() {
	choicePlayer1.innerText = paper;
}
scissorsPlayer1.onclick = function() {
	choicePlayer1.innerText = scissors;
}
stonePlayer1.onclick = function() {
	choicePlayer1.innerText = stone;
}

paperPlayer2.onclick = function() {
	choicePlayer2.innerText = paper;
}
scissorsPlayer2.onclick = function() {
	choicePlayer2.innerText = scissors;
}
stonePlayer2.onclick = function() {
	choicePlayer2.innerText = stone;
}

resultButton.onclick = function() {
	if (choicePlayer1.innerText == paper && choicePlayer2.innerText == scissors) {
		resultWinner.innerText = 'Player2';
	} else {
		resultWinner.innerText = 'Player1';
	}
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