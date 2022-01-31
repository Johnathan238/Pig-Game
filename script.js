'use strict';

// selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0ID = document.getElementById('score--0');
const score1ID = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const name0EL = document.getElementById('name--0');
const name1EL = document.getElementById('name--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing


const freshStart = function (){
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEL.classList.add('hidden');
  score0ID.textContent = 0
  score1ID.textContent = 0
  current0EL.textContent = 0
  current1EL.textContent = 0
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
}
freshStart()

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
// Starting Condition
score0ID.textContent = 0;
score1ID.textContent = 0;
diceEL.classList.add('hidden');

// Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Random Dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if tru, switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore
    } else {
      switchPlayer()
    }
  }});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false
      diceEL.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {

      // Finish the game
  
      // Switch to the next player
      switchPlayer()
    }
  }
});
document.querySelector('.btn--new').addEventListener('click', function(){
  freshStart()
  })
// document.querySelector('.again').addEventListener('click', function () {
//   // let number = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = '?'
//   document.querySelector('.guess').value = 0
//   document.querySelector('.number').style.width = '15rem'
//   document.querySelector('body').style.backgroundColor = '#222'
//   displayMessage('Start guessing...')
//   document.querySelector('.score').textContent = 20
// })
