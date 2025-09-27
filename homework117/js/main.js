(function () {
  // burger
  document.addEventListener("click", burgerInit);
  function burgerInit(e) {
    const burgerIcone = e.target.closest(".burger-icone");
    const navLink = e.target.closest(".nav-link");
    if (!burgerIcone && !navLink) return;
    if (document.documentElement.clientWidth > 900) return;
    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  // modal
  const modalButton = document.querySelector(".about__img-button");
  const modal = document.querySelector(".modal");

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);

  function openModal(e) {
    e.preventDefault();
    document.body.classList.add("body--opened-modal");
  }
  function closeModal(e) {
    e.preventDefault();
    const target = e.target;

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal")
    ) {
      document.body.classList.remove("body--opened-modal");
    }
  }

  //  tabs
  const tabControls = document.querySelector(".tab-controls");

  tabControls.addEventListener("click", toggleTab);
  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");
    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains("tab-controls__link--active")) return;

    const tabContentID = tabControl.getAttribute("href");

    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector(".tab-controls__link--active");
    const activeContent = document.querySelector(".tab-content--show");
    if (activeContent) {
      activeContent.classList.remove("tab-content--show");
    }
    tabContent.classList.add("tab-content--show");
    if (activeControl) {
      activeControl.classList.remove("tab-controls__link--active");
    }

    tabControl.classList.add("tab-controls__link--active");
  }

  // accordion

  const accordionLists = document.querySelectorAll(".accordion-list");
  accordionLists.forEach((el) => {
    

    el.addEventListener("click", (e) => {


      const accordionList = e.currentTarget;
      const accordionOpenItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenContent =accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
      const accordionControl = e.target.closest(".accordion-list__control");

      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;
      
      
      if(accordionOpenItem && (accordionItem !== accordionOpenItem)){ //&& (accordionControl ==)
        accordionOpenItem.classList.remove('accordion-list__item--opened');
        accordionOpenContent.style.maxHeight = null;
      }
      
      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();
