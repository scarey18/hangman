const wordBox = document.getElementById('word');
const alphabetBox = document.getElementById('alphabet-box');
const endGame = document.getElementById('end-game');
const winLose = document.getElementById('win-lose');

let wrongPicks;

function playGame(word) {
	wrongPicks = 0;

	for (let letter of word) {
		if (letter == ' ') {
			wordBox.textContent = wordBox.textContent.concat(' ');

		} else {
			wordBox.textContent = wordBox.textContent.concat('_');
		}
	}
}

function pickLetter(letter, word) {
	if (word.includes(letter)) {
		updateWordBox(letter, word);

		if (!wordBox.textContent.includes('_')) {
			winGame();
		}

	} else if (wrongPicks < 7) {
		++wrongPicks;

		const bodyPart = document.getElementById('part-'+wrongPicks);

		bodyPart.style.visibility = 'visible';

		if (wrongPicks == 7) {
			loseGame(word);
		}
	}
}

function updateWordBox(letter, word) {
	let display = '';

	for (let i=0; i<word.length; i++) {
		if (word[i] == letter) {
			display = display.concat(letter)
		} else {
			display = display.concat(wordBox.textContent[i])
		}
	}

	wordBox.textContent = display;
}

function loseGame(word) {
	winLose.textContent = 'You lose :(';
	wordBox.textContent = word;
	alphabetBox.style.visibility = 'hidden';
	endGame.style.visibility = 'visible';
}

function winGame() {
	winLose.textContent = 'You win!';
	alphabetBox.style.visibility = 'hidden';
	endGame.style.visibility = 'visible';
}

module.exports = {playGame, pickLetter}