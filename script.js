'use strict';

// Variable Elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const totalScore0 = document.getElementById('total-score--0');
const totalScore1 = document.getElementById('total-score--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions

score0.textContent = 0;
score1.textContent = 0;
totalScore0.textContent = 0;
totalScore1.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
dice.classList.add('hidden');
let totalScores = [0, 0];

const startingConditions = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  current1.textContent = 0;
  current0.textContent = 0;
  playing = true;
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Dice Function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random number
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    // Check for 1 or Add score

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getElementById(`total-score--${activePlayer}`).textContent =
        totalScores[activePlayer] += 1;
      document.querySelector(`.poop--${activePlayer}`).classList.remove('hidden');
      document.querySelector(`.poop--${activePlayer}`).classList.add('grow');
      document.querySelector(`.happy--${activePlayer}`).classList.add('grow1');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  startingConditions();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
    document.querySelector(`.poop--${activePlayer}`).classList.remove('grow');
    document.querySelector(`.happy--${activePlayer}`).classList.remove('grow1');
});
