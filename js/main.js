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

let choiceOnePlayer = '';
let choiceTwoPlayer = '';

let paper = 'Paper';
let scissors = 'Scissors';
let stone = 'Stone';

paperPlayer1.onclick = function() {
	choicePlayer1.innerText = paper;
	choiceOnePlayer = paper;
}
scissorsPlayer1.onclick = function() {
	choicePlayer1.innerText = scissors;
	choiceOnePlayer = scissors;
}
stonePlayer1.onclick = function() {
	choicePlayer1.innerText = stone;
	choiceOnePlayer = stone;
}

paperPlayer2.onclick = function() {
	choicePlayer2.innerText = paper;
	choiceTwoPlayer = paper;
}
scissorsPlayer2.onclick = function() {
	choicePlayer2.innerText = scissors;
	choiceTwoPlayer = scissors;
}
stonePlayer2.onclick = function() {
	choicePlayer2.innerText = stone;
	choiceTwoPlayer = stone;
}

resultButton.onclick = function() {
	if (choiceOnePlayer == paper && choiceTwoPlayer == stone || choiceOnePlayer == scissors && choiceTwoPlayer == paper || choiceOnePlayer == stone && choiceTwoPlayer == scissors) {
		resultWinner.innerText = 'Player1';
	} else if (choiceOnePlayer == choiceTwoPlayer) {
		resultWinner.innerText = 'Draw';
	} else {
		resultWinner.innerText = 'Player2';
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