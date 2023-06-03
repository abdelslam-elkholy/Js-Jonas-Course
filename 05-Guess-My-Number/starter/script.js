'use strict';

let secretNumber =  Math.trunc(Math.random()*20) + 1;
let score = 20;
let heighScore =0;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const numLabel = document.querySelector('.number');
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
    while(typeof num === 'number' ){
    if (num === secretNumber)
    {
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.message').textContent = 'You Got It';
        document.querySelector('body').style.backgroundColor = 'green'
        numLabel.textContent = secretNumber
        numLabel.style.width = '30rem'
    }
    else if( num > secretNumber)
    {
        guess('Too High')
    }
    else if ( num < secretNumber)
    {
        guess('Too Low')
    }
    }
}
checkBtn.addEventListener('click' , ()=>
{
    if (score > 0 )
    {
        playGame();
    }

    else 
    {
        alert('you lost')
    }
})


