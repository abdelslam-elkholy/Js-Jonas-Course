'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let message = document.querySelector('.message')
let scoreLabel = document.querySelector('.score')
let bodyColor = document.querySelector('body')
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const numLabel = document.querySelector('.number');


console.log(secretNumber);


const guess = (text)=>
{
    console.log('hey im working from guess');
    message.textContent = text;
    score --
    scoreLabel.textContent = score;
}


const playGame = () => {
  const num = document.querySelector('.guess').value;
  console.log('hey im working from play');
  if (num) {
    console.log('hey im working from play if');
    if (num === secretNumber) {
      document.querySelector('.highscore').textContent = score;
      numLabel.textContent = secretNumber;
      numLabel.style.width = '30rem';
      bodyColor = 'green';
    } else if (num > secretNumber) {
        guess('Too High!')
    } else if (num < secretNumber) {
      guess('Too Low');
    }
  }
  else
  {
    console.log('hey im working from play else');
    message.textContent= 'enter a Number'; 
  }
};
checkBtn.addEventListener('click', () => {
  if (score > 0) {
    playGame();
  } else {
    alert('you lost');
  }
});

againBtn.addEventListener('click' , ()=>
{
    score = 20;
    message = 'Start guessing...'
    numLabel.textContent = '?'
    numLabel.style.width = '15rem'
    bodyColor = 'black'

})