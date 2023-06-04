'use strict';

const openModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const toggleModal = (action, att) => {
  att.map(el =>
    action === 'add'
      ? el.classList.add('hidden')
      : el.classList.remove('hidden')
  );
};

openModalBtns.forEach(btn =>
  btn.addEventListener('click', () => toggleModal('remove', [modal, overlay]))
);

closeModalBtn.addEventListener('click', () =>
  toggleModal('add', [modal, overlay])
);
overlay.addEventListener('click', () => toggleModal("add", [modal, overlay]));
