const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const scoreEl = document.querySelectorAll('.score');
// eslint-disable-next-line
for (let i = 0; i < scoreEl.length; i++) {
  scoreEl[i].textContent = 0;
}

const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

let activePlayer = 0;
let playing = true;
let score = [0, 0, 0, 0];
let currentScore = 0;
const position = [0, 1, 2, 3];

function switchPlayer() {
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  // eslint-disable-next-line
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
    .classList.add('player--active');
}

btnRoll.addEventListener('click', () => {
  if (playing) {
    const number = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `./images/dice-${number}.png`;

    if (number !== 1) {
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  playing = true;
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  score = [0, 0, 0, 0];
  currentScore = 0;
  const scoreEl = document.querySelectorAll('.score');
  // eslint-disable-next-line
    for (let i = 0; i < scoreEl.length; i++) {
    scoreEl[i].textContent = 0;
  }
  document.getElementById(`score--${activePlayer}`).textContent = 0;
});
