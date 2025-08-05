const btnOpen = document.querySelector('.btn-open');
const modalClose = document.querySelector('.modal__close-btn');
const modalWindow = document.querySelector('.modal__none');
const modal = document.querySelector('.modal');

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

// modalClose.addEventListener('click', () => {
//     if (modalWindow.classList.contains('modal__window')) {
//         winClose();
//     }
// });

modal.addEventListener('click', event => {
    const target = event.target;
    if (modalWindow.classList.contains('modal__window') && target == modalClose ||  target !== modalWindow) {
        winClose();
    }
});

document.addEventListener('keydown', event => {
    // console.log(event.key);
    if (event.code === 'Escape' && modalWindow.classList.contains('modal__window')) {
        winClose();
    }
})
