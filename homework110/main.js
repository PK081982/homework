const button = document.querySelector('button');
let isRed = true;
button.addEventListener('click', () => {
    if (isRed) {
        button.style.background = 'red';
        isRed = false;
    } else {
        button.style.background = 'blue';
        isRed = true;
    }
})

document.addEventListener('scroll', () => {
    console.log('scroll');
})

const botn = document.querySelector('.botn');
const text = document.querySelector('.text');

botn.addEventListener('click', () => {
    console.log(text.classList);
    text.classList.toggle('move');
    if (text.classList.contains('move')) {
        text.textContent = 'I am going';
    } else {
        text.textContent = 'I am standing';
    }
})

// ///////////////////////////////////////////////////////////
const btns = document.querySelectorAll('.btn');
btns.forEach((btn, index) => {

    btn.addEventListener('click', () => {
        console.log(index + 1);
    })

})

// //////////////////////////////////////////////////////////////////////
const btna = document.querySelector('.btna');

btna.addEventListener('click', (event)=>{
   event.target.classList.toggle('red');
})