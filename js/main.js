let doc = document;

let gameItemsPlayer1 = doc.querySelectorAll('.player_1 .game-item');
let gameItemsPlayer2 = doc.querySelectorAll('.player_2 .game-item');
let choicePlayer1 = doc.querySelector('.player_1 .player__choice-item');
let choicePlayer2 = doc.querySelector('.player_2 .player__choice-item');
let resultButton = doc.querySelector('.result__button');
let resultWinner = doc.querySelector('.result__winner');
let resetGame = doc.querySelector('.result__reset');

let paper = 'Paper';
let scissors = 'Scissors';
let stone = 'Stone';

let winner = '';
let draw = true;
let isCorrect = true;

for (let i = 0; i < gameItemsPlayer1.length; i++) {
	gameItemsPlayer1[i].onclick = function () {
		choicePlayer1.innerText = gameItemsPlayer1[i].innerText;
	}
}
for (let i = 0; i < gameItemsPlayer2.length; i++) {
	gameItemsPlayer2[i].onclick = function () {
		choicePlayer2.innerText = gameItemsPlayer2[i].innerText;
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