'use strict';

const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const toggleModal = (action , att) => 
{
    att.map(el =>el.classList.action('.hidden'));

}