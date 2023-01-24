'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
// check button Handler
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').disabled = true;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (guess > 20 || guess < 1) {
            displayMessage('⛔ Number is out of range!');
        } else if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// again button Handler
document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
});
