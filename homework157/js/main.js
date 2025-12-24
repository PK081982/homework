(function () {
// telephone
  const telInputs = document.querySelector('input[type = "tel"]');
const im = new Inputmask ('+7 (999) 999-99-99');
im.mask(telInputs);

// investmentPortfolio   img-elipse
const elipse1 = document.querySelector('#elips1');
const elipse2 = document.querySelector('#elips2');
const rangeInput = document.getElementById('myRange');

  
 elipse1.addEventListener('click', function(event) {
    console.log('Изображение было кликнуто!');
    console.log('Источник изображения:', event.target.src); // event.target - сам элемент, на который кликнули
    // Пример: смена src по клику
    if (event.target.src.includes('img/investmentPortfolio/Ellipse2.svg')) {
      event.target.src = 'img/investmentPortfolio/Ellipse3.svg';
      elipse2.src = 'img/investmentPortfolio/Ellipse2.svg';
      rangeInput.disabled = true;
    } 
  });
  elipse2.addEventListener('click', function(event) {
    console.log('Изображение было кликнуто!');
    console.log('Источник изображения:', event.target.src); // event.target - сам элемент, на который кликнули
    // Пример: смена src по клику
    if (event.target.src.includes('img/investmentPortfolio/Ellipse2.svg')) {
      event.target.src = 'img/investmentPortfolio/Ellipse3.svg';
      elipse1.src = 'img/investmentPortfolio/Ellipse2.svg';
      rangeInput.disabled = false;
    } 
// ============================================


  });


// ================================================================
// const modalButton = document.querySelector(".about__img-button");
//   const modal = document.querySelector(".modal");

//   modalButton.addEventListener("click", openModal);
//   modal.addEventListener("click", closeModal);

//   function openModal(e) {
//     e.preventDefault();
//     document.body.classList.add("body--opened-modal");
//   }
//   function closeModal(e) {
//     e.preventDefault();
//     const target = e.target;

//     if (
//       target.closest(".modal__cancel") ||
//       target.classList.contains("modal")
//     ) {
//       document.body.classList.remove("body--opened-modal");
//     }
//   }
// ======================================================================

})();