'use strict';

const modalEl = document.querySelector('.modal');

const overlayEl = document.querySelector('.overlay');

const btnCloseModalEl = document.querySelector('.close-modal');

const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

// Create our openModal function
const openModal = function () {
  // Remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // Remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');
};

// Create our closeModal function
const closeModal = function () {
  // Add the hidden class back to modal to hide it
  modalEl.classList.add('hidden');

  // Add the hidden class back to overlay to hide dark background
  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModalEl.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);
