let menuBtn = document.querySelector('.menu-btn');
let mainMenu = document.querySelector('.main-menu');
menuBtn.addEventListener('click',function(){
    mainMenu.classList.toggle('show');
})

let searchLink = document.querySelector('.searchLink');
searchLink.addEventListener('click',()=>{
    document.querySelector('.searchBox').classList.toggle('show');
})