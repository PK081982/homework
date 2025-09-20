(function(){
    document.addEventListener('click', burgerInit);
    function burgerInit(e){
    const burgerIcone = e.target.closest('.burger-icone');
    const navLink = e.target.closest('.nav-link'); 
    if(!burgerIcone && !navLink) return;
    if(document.documentElement.clientWidth>900)return;
    if(!document.body.classList.contains("body--opened-menu")){
        document.body.classList.add('body--opened-menu');
    }
    else{
        document.body.classList.remove('body--opened-menu');
    }   
    }

 const modalButton = document.querySelector('.about__img-button');
    const modal = document.querySelector('.modal');

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.add('body--opened-modal');
    }
    function closeModal(e) {
        e.preventDefault();
        const target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

})()

