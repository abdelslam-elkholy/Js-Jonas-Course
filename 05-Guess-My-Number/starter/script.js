'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let message = document.querySelector('.message').textContent;
let scoreLabel = document.querySelector('.score').textContent;
let bodyColor = document.querySelector('body').style.backgroundColor;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const numLabel = document.querySelector('.number');
console.log(secretNumber);

const guess = message => {
  document.querySelector('.message').textContent = message;
  score--;
  
};

const playGame = () => {
  const num = document.querySelector('.guess').value;
  if (num) {
    if (num === secretNumber) {
      document.querySelector('.highscore').textContent = score;
      
      
      numLabel.textContent = secretNumber;
      numLabel.style.width = '30rem';
    } else if (num > secretNumber) {
      guess('Too High');
    } else if (num < secretNumber) {
      guess('Too Low');
    }
  }
  else
  {
    document.querySelector('.message').textContent = 'enter a Number'; 
  }
};
checkBtn.addEventListener('click', () => {
  if (score > 0) {
    playGame();
  } else {
    alert('you lost');
  }
});
