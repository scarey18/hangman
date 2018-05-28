const wordList = require('./wordList.js')
const game = require('./game.js');

const wordBox = document.getElementById('word');
const alphabetBox = document.getElementById('alphabet-box');
const startDisplay = document.getElementById('start-display');
const endGame = document.getElementById('end-game');
const startGame = document.getElementById('start-game');
const playAgain = document.getElementById('play-again');

const alphabet = ' abcdefghijklmnopqrstuvwxyz ';

function pickWord() {
	let word;

	const words = wordList.words;

	while (!word) {
		const index = randomIndex(words.length);
		if (words[index].length >= 5) {
			word = words[index];
		}
	}

	return word.toLowerCase();
}

function randomIndex(length) {
	return Math.floor(Math.random() * Math.floor(length));
}


let word = pickWord();

for (let letter of alphabet) {
	const div = document.createElement('div');
	div.textContent = letter;
	div.classList.add('flex');
	div.classList.add('letter');
	alphabetBox.appendChild(div);
}

for (let letter of document.querySelectorAll('.letter')) {
	letter.addEventListener('click', (e) => {
		e.preventDefault();

		if (letter.style.color == 'rgba(128, 128, 128, 0.46)') {
			return;
		}

		letter.style.color = 'rgba(128, 128, 128, 0.46)';
		game.pickLetter(letter.textContent, word);
	});
}

startGame.addEventListener('click', () => {
	startDisplay.style.visibility = 'hidden';
	game.playGame(word);
});

playAgain.addEventListener('click', () => {
	for (let part of document.querySelectorAll('.body-part')) {
		part.style.visibility = 'hidden';
	}

	for (let letter of document.querySelectorAll('.letter')) {
		letter.style.color = 'black';
	}

	wordBox.textContent = '';
	alphabetBox.style.visibility = 'visible';
	endGame.style.visibility = 'hidden';
	word = pickWord();
	game.playGame(word);
});

