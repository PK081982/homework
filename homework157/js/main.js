(function () {
  // telephone
  const telInputs = document.querySelector('input[type = "tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(telInputs);

  // investmentPortfolio   img-elipse
  const elipse1 = document.querySelector('#elips1');
  const elipse2 = document.querySelector('#elips2');
  const rangeInput = document.getElementById('myRange');


  elipse1.addEventListener('click', function (event) {
    console.log('Изображение было кликнуто!');
    console.log('Источник изображения:', event.target.src); // event.target - сам элемент, на который кликнули
    // Пример: смена src по клику
    if (event.target.src.includes('img/investmentPortfolio/Ellipse2.svg')) {
      event.target.src = 'img/investmentPortfolio/Ellipse3.svg';
      elipse2.src = 'img/investmentPortfolio/Ellipse2.svg';
      rangeInput.disabled = true;
    }
  });
  elipse2.addEventListener('click', function (event) {
    console.log('Изображение было кликнуто!');
    console.log('Источник изображения:', event.target.src); // event.target - сам элемент, на который кликнули
    // Пример: смена src по клику
    if (event.target.src.includes('img/investmentPortfolio/Ellipse2.svg')) {
      event.target.src = 'img/investmentPortfolio/Ellipse3.svg';
      elipse1.src = 'img/investmentPortfolio/Ellipse2.svg';
      rangeInput.disabled = false;
    }

  });

  // timer

  const Day = document.querySelector('.bunner__time-day');
  const Hour = document.querySelector('.bunner__time-hour');
  const Minute = document.querySelector('.bunner__time-minute');
  const Second = document.querySelector('.bunner__time-second');
 
  Day.textContent =27;
  Hour.textContent =7;
  Minute.textContent = 40;
  Second.textContent = 15;

 if(Hour.textContent <10){
        Hour.textContent = Hour.textContent.toString().padStart(2, '0');  
 }



  function changeSecond() {
    changeMinute();
    if (Second.textContent == 0) {
      Second.textContent = 60; 
    }

    if (Second) {
      // 3. Меняем его текстовое 

      if(Second.textContent<11){
        let num = Number(Second.textContent) - 1;
        let str = num.toString().padStart(2, '0');
        Second.textContent =str;
        // parent(Second.textContent);
      
      }
      else{
        Second.textContent = Number(Second.textContent) - 1;
      }
    }
  }

  function changeMinute() {
    changeHour();
     if (Minute.textContent == 0 && Second.textContent == 0) {

      Minute.textContent = 60;
     
    }
    if(Second.textContent == 0){
      if(Minute.textContent<11){
        let num = Number(Minute.textContent) - 1;
        let str = num.toString().padStart(2, '0');
        Minute.textContent =str;
        // Minute.textContent = parent(Minute.textContent);
      }
      else{
        Minute.textContent = Number(Minute.textContent) - 1;
      }
    }
    
    
  }

  function changeHour() {
    changeDay();
    if (Hour.textContent == 0 && Minute.textContent == 0 && Second.textContent == 0) {
      Hour.textContent = 24;
      // changeHour();
    }

    if(Minute.textContent == 0 && Second.textContent == 0){
      if(Hour.textContent<11){
        let num = Number(Hour.textContent) - 1;
        let str = num.toString().padStart(2, '0');
        Hour.textContent =str;
        // Hour.textContent = parent(Hour.textContent);
      }
      else{
        Minute.textContent = Number(Second.textContent) - 1;
      }
    }
    
  }
  function changeDay() {
     if(Day.textContent == 0 && Hour.textContent == 0 && Minute.textContent == 0 && Second.textContent == 1){
 console.log('stop');
      stopTimer();
     
    }
    if (Hour.textContent == 0 && Minute.textContent == 0 && Second.textContent == 0) {
      if(Day.textContent<11){
        let num = Number(Day.textContent) - 1;
        let str = num.toString().padStart(2, '0');
       Day.textContent =str;
        // Day.textContent = parent(Hour.textContent);
      }
      else{
        Minute.textContent = Number(Second.textContent) - 1;
      }
    }
      // changeHour();
    }
    


  let timerId =  setInterval(changeSecond, 1000);
   function stopTimer(){
     console.log('stop111');
    clearInterval(timerId);
   }


   // accordion

   document.querySelector(".accordion-list").addEventListener("click", (e) => {
      e.preventDefault();
      const accordionList = e.currentTarget;
      console.log(accordionList);
      const accordionOpenItem = accordionList.querySelector(
        ".accordion-list__item--opened"
      );
      const accordionOpenContent = accordionList.querySelector(
        ".accordion-list__item--opened .accordion-list__content"
      );
      const accordionControl = e.target.closest(".accordion-list__control");

      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenItem && accordionItem !== accordionOpenItem) {
        //&& (accordionControl ==)
        accordionOpenItem.classList.remove("accordion-list__item--opened");
        accordionOpenContent.style.display = "none";
      }

      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.display = "block";
      } else {
        accordionContent.style.display = "none";
      }
    });
      

  

  // ================================================================
 const btnOpen = document.querySelector('.btn-open');
const modalClose = document.querySelector('.modal__close-btn');
const modalWindow = document.querySelector('.modal__none');
const modal = document.querySelector('.modal');
const second = document.querySelector('.second--none');

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

  //======================================================================

})();
