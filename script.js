'use strict';

// selecting elements
const score0ID = document.getElementById('score--0')
const score1ID = document.getElementById('score--1')
const current0EL = document.getElementById('current--0')
const current1EL = document.getElementById('current--1')
const name0EL = document.getElementById('name--0')
const name1EL = document.getElementById('name--1')
const diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
// Starting Condition
    score0ID.textContent = 0
    score1ID.textContent = 0
    diceEL.classList.add('hidden')

    // Rolling dice function
    btnRoll.addEventListener('click', function(){
        // 1. Random Dice roll
        const dice = Math.trunc(Math.random() * 6) + 1 
        console.log(dice);

        // 2. Display dice
        diceEL.classList.remove('hidden')
        diceEL.src = `dice-${dice}.png`

        // 3. Check for rolled 1: if tru, switch player 
        if(dice !== 1){
            currentScore += dice
            current0EL.textContent = currentScore
        } else {
            name1EL
            currentScore.value = 0
            current1EL.textContent = currentScore
        }
    })
    
    //Trying to figure a way to switch players!



