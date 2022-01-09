'use strict';

// selecting elements
const score0ID = document.getElementById('score--0')
const score1ID = document.getElementById('score--1')
const diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Condition
    score0ID.textContent = 0
    score1ID.textContent = 0
    diceEL.classList.add('hidden')

    // Rolling dice function
    btnRoll.addEventListener('click', function(){
        // 1. Random Dice roll
        const dice = Math.trunc(Math.random() * 6) + 1 

        // 2. Display dice
        diceEL.classList.remove('hidden')
        diceEL.src = `dice-${dice}.png`

        // 3. Check for rolled 1: if tru, switch player 

    })



