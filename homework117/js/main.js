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


// const body = document.querySelector('body');
// const burgerIcone = document.querySelector('.burger-icone');
// const navLink = document.querySelectorAll('.nav-link');
// // allLinks[0].textContent="newtext";

// //  body.classList.add('body--opened-menu');
// burgerIcone.addEventListener('click', () => {
//     if(!body.classList.contains("body--opened-menu")){
//         body.classList.add('body--opened-menu');
//     }
//     else{
//         body.classList.remove('body--opened-menu');
//     }
// });
// navLink.forEach((element)=>{
// element.addEventListener('click', () => {
//     if(body.classList.contains("body--opened-menu")){
//         body.classList.remove('body--opened-menu');
//         console.log(document.documentElement.clientWidth)
//     }
// }) 
// });

})()
