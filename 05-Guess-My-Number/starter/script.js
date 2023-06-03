'use strict';

let secretNumber =  Math.trunc(Math.random()*20) + 1;
let score = document.querySelector('.score').textContent;
let heighScore = document.querySelector('.label-highscore').textContent
let message = document.querySelector('.message').textContent;
const checkBtn = document.querySelector('.check');

