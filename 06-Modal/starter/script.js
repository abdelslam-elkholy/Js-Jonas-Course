'use strict';

const openModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const toggleModal = (action, att) => {
  att.map(el => el.classList.action('.hidden'));
};

openModalBtns.map(btn =>
  btn.addEventListner('click', () => toggleModal(remove, [modal, overlay]))
);

closeModalBtn.addEventListener('click' , ()=> toggleModal(add , [modal , overlay]))
overlay.addEventListener('click' , ()=> toggleModal(add , [modal , overlay]))
