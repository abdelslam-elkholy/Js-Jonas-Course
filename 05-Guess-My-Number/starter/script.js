'use strict';

let secretNumber =  Math.trunc(Math.random()*20) + 1;
let score = 20;

let heighScore =0;
let message = document.querySelector('.message').textContent;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

console.log(secretNumber);

const playGame = (message  )=>
{
    const num = Number(document.querySelector('.guess').value) ;
    if (num === secretNumber) alert('you got it')
    document.querySelector('.score').textContent;
    document.querySelector('.label-highscore').textContent

}
checkBtn.addEventListener('click' ,playGame)


