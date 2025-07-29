const btnOpen = document.querySelector('.btn-open');
const modalClose = document.querySelector('.modal__close-btn');
const modalWindow = document.querySelector('.modal__none');

function winClose() {
    modalWindow.classList.remove('modal__window');
    modalWindow.classList.add('modal__none');
}

btnOpen.addEventListener('click', () => {
    if (modalWindow.classList.contains('modal__none')) {
        modalWindow.classList.remove('modal__none');
        modalWindow.classList.add('modal__window');
    }
});

modalClose.addEventListener('click', () => {
    if (modalWindow.classList.contains('modal__window')) {
        winClose();
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Tab' && modalWindow.classList.contains('modal__window')) {
        winClose();
    }
})