'use strict';

const dice = document.querySelector('.dice')
dice.classList.add('hidden')

const scoreEl = document.querySelectorAll('.score')
for (let i = 0; i < scoreEl.length; i++){
    scoreEl[i].textContent = 0
}

let activePlayer = 0
let playing = true
let currentScore = 0
let position = [0, 1, 2 , 3]

const btnRoll = document.querySelector('.btn--roll')
btnRoll.addEventListener('click', function () {
    const number = Math.trunc(Math.random() * 6 + 1)
    dice.classList.remove("hidden");
    dice.src = `./images/dice-${number}.png`;
    if (number !== 1) {
        currentScore += number
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        console.log(activePlayer)
    } else {
        for (let j = 0; j < position.length; j++){
            // console.log(activePlayer)
            if (activePlayer !== position.length - 1) {
                if (activePlayer === position[j]) {
                    console.log(activePlayer);
                    activePlayer = position[j + 1]
                    console.log(activePlayer)
                    break
                } 
            } else {
                activePlayer = 0
            }
            

        }
    }
})
