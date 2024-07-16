'use strict';

console.log('Hello World');

const Score1 = document.querySelector('#score--0');
const Score2 = document.getElementById('score--1');
const DiceObj = document.querySelector('.dice');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const Newbtn = document.querySelector('.btn--new');
const Rollbtn = document.querySelector('.btn--roll');
const Holdbtn = document.querySelector('.btn--hold');

const CurrentScore = document.querySelector('.current-score');
let current, activePlayer, playing, totalScore;
DiceObj.classList.add('hidden');

const initaialCondition = function () {
  playing = true;
  current = 0;

  activePlayer = 0;
  totalScore = [0, 0];
  Score1.textContent = Score2.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  DiceObj.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

initaialCondition();
function switchPlayer() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}

Rollbtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    DiceObj.classList.remove('hidden');
    DiceObj.src = `dice-${dice}.png`;
    if (dice != 1) {
      current += dice;
      document.getElementById(`current--${activePlayer}`).textContent = current;
      //CurrentScore.textContent=current;
    } else {
      switchPlayer();
    }
  }
});
Holdbtn.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += current;
    if (totalScore[activePlayer] < 100) {
      document.querySelector(`#score--${activePlayer}`).textContent =
        totalScore[activePlayer];
      switchPlayer();
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      DiceObj.classList.add('hidden');
      playing = false;
    }
  }
});

Newbtn.addEventListener('click', initaialCondition);
