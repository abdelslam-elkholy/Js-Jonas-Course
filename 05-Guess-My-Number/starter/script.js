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



const guessWrong = text => {
 
  message.textContent = text;
  score--;
  scoreLabel.textContent = score;
};

const guess = (text,  scoreb, color, width, numlabel , btnStatus) => {
  bodyColor.style.backgroundColor = color;
 
  document.querySelector('.highscore').textContent = heighScore;
  numLabel.textContent = numlabel;
  numLabel.style.width = width;
  message.textContent = text;
  score = scoreb;
  scoreLabel.textContent = scoreb;
  checkBtn.disabled = btnStatus;
};
const playGame = () => {
  const num = Number(document.querySelector('.guess').value);

  if (num) {
 
    if (num === secretNumber) {
      heighScore = heighScore > score ? heighScore : score;
      guess('You Got It', score, '#60b347', '30rem', secretNumber , true);
    } else if (num > secretNumber) {
      guessWrong('Too High!');
    } else if (num < secretNumber) {
      guessWrong('Too Low');
    }
  } else {

    message.textContent = 'enter a Number';
  }
};
checkBtn.addEventListener('click', () => {
  if (score > 1) {
    playGame();
  } else {
    bodyColor.style.backgroundColor = 'red'
    message.textContent = "You Lost"
    checkBtn.disabled = true;
    scoreLabel.textContent=0;
  }
});

againBtn.addEventListener('click', () => {
  guess('Start guessing...',  20, '#222', '15rem', '?' , false);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
