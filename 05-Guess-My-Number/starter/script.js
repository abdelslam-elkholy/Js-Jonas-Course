'use strict';

let secretNumber =  Math.trunc(Math.random()*20) + 1;
let score = 20;

let heighScore =0;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

console.log(secretNumber);
const guess = (message) =>
{
    document.querySelector('.message').textContent = message;
    score--
    document.querySelector('.score').textContent = score
}

const playGame = ()=>
{
    const num = Number(document.querySelector('.guess').value) ;
    if (num === secretNumber)
    {

    }
    else if( num > secretNumber)
    {
        guess('Too High')
    }
    else if ( num < secretNumber)
    {
        guess('Too Low')
    }
    document.querySelector('.label-highscore').textContent

}
checkBtn.addEventListener('click' ,playGame)


