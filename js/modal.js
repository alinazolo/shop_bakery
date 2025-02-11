const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open'); // Select all buttons
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// Loop through all buttons and add event listener
modalBtnsOpen.forEach(btn => btn.addEventListener('click', toggleModal));

modalBtnClose.addEventListener('click', toggleModal);
