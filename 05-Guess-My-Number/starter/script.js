'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let message = document.querySelector('.message');
let scoreLabel = document.querySelector('.score');
let bodyColor = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const numLabel = document.querySelector('.number');

console.log(secretNumber);

const guessWrong = text => {
  console.log('hey im working from guess');
  message.textContent = text;
  score--;
  scoreLabel.textContent = score;
};

const guess = (text, highscore, scoreb, color, width, numlabel) => {
  bodyColor.style.backgroundColor = color;
  heighScore = highscore;
  document.querySelector('.highscore').textContent = highscore;
  numLabel.textContent = numlabel;
  numLabel.style.width = width;
  message.textContent = text;
  score = scoreb;
  scoreLabel.textContent = scoreb;
};
const playGame = () => {
  const num = Number(document.querySelector('.guess').value);

  console.log('hey im working from play');
  if (num) {
    console.log('hey im working from play if');
    if (num === secretNumber) {
      guess('You Got It', score, score, '#60b347', '30rem', secretNumber);
    } else if (num > secretNumber) {
      guessWrong('Too High!');
    } else if (num < secretNumber) {
      guessWrong('Too Low');
    }
  } else {
    console.log('hey im working from play else');
    message.textContent = 'enter a Number';
  }
};
checkBtn.addEventListener('click', () => {
  if (score > 0) {
    playGame();
  } else {
    alert('you lost');
  }
});

againBtn.addEventListener('click', () => {
  guess('Start guessing...', heighScore, 20, '#222', '15rem', '?');
});
