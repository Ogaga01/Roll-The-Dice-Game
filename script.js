'use strict';

const dice = document.querySelector('.dice')
dice.classList.add('hidden')

const scoreEl = document.querySelectorAll('.score')
for (let i = 0; i < scoreEl.length; i++){
    scoreEl[i].textContent = 0
}

const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector('.btn--new')

let activePlayer = 0
let playing = true
let currentScore = 0
let position = [0, 1, 2, 3]
let score = [0, 0, 0, 0]

const switchPlayer = function () {
    currentScore = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    for (let j = 0; j < position.length; j++) {
      if (activePlayer !== position.length - 1) {
        if (activePlayer === position[j]) {
          activePlayer = position[j + 1];
          break;
        }
      } else {
        activePlayer = 0;
      }
    }
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
}



btnRoll.addEventListener('click', function () {
    if (playing) {
     const number = Math.trunc(Math.random() * 6 + 1);
     dice.classList.remove("hidden");
     dice.src = `./images/dice-${number}.png`;

     if (number !== 1) {
       currentScore += number;
       document.getElementById(`current--${activePlayer}`).textContent =
         currentScore;
     } else {
       switchPlayer();
     }   
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
     score[activePlayer] += currentScore;
     document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];   
        
        if (score[activePlayer] >= 100) {
          playing = false;

          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
          dice.classList.add("hidden");
        } else switchPlayer();
    }
})

btnNew.addEventListener('click', function () {
    currentScore = 0
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--winner");
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.getElementById(`score--${activePlayer}`).textContent =
        0;
    const scoreEl = document.querySelectorAll(".score");
    for (let i = 0; i < scoreEl.length; i++) {
      scoreEl[i].textContent = 0;
    }
    activePlayer = 0;
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
})
