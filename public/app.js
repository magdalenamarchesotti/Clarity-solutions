let collapseItems = document.querySelectorAll('.collapse-item');

collapseItems.forEach(collapseItem => {
    collapseItem.addEventListener('click', () => {
        collapseItem.classList.toggle('collapse-icon');
        let height = 0;
        let text = collapseItem.nextElementSibling;
        if (text.clientHeight === 0) {
            height = text.scrollHeight;
        }
        text.style.height = `${height}px`;
    })
})

let teamButton = document.querySelector('.team-button');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.modal-close');

teamButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-show');
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
})

let teamButton2 = document.querySelector('.team-button-2');
let modal2 = document.querySelector('.modal-2');
let closeModal2 = document.querySelector('.modal-close-2');

teamButton2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.add('modal-show');
})

closeModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.remove('modal-show');
})

let teamButton3 = document.querySelector('.team-button-3');
let modal3 = document.querySelector('.modal-3');
let closeModal3 = document.querySelector('.modal-close-3');

teamButton3.addEventListener('click', (e) => {
    e.preventDefault();
    modal3.classList.add('modal-show');
})

closeModal3.addEventListener('click', (e) => {
    e.preventDefault();
    modal3.classList.remove('modal-show');
})

let responsiveButton = document.querySelector('.responsiveButton');
let responsiveButtonClose = document.querySelector('.responsiveButtonClose');
let responsiveMenu = document.querySelector('.menu');
let divLogo = document.querySelector('.divLogo');
let navBar = document.querySelector('.navBar');

responsiveButton.addEventListener('click', () => {
    responsiveMenu.classList.add('menuActive');
    divLogo.classList.add('hide');
    navBar.classList.add('active');
    responsiveButtonClose.classList.add('active');
})

responsiveButton.addEventListener('click', () => {
    responsiveMenu.classList.add('menuActive');
    divLogo.classList.add('hide');
    navBar.classList.add('active');
    responsiveButtonClose.classList.add('active');
})

responsiveButtonClose.addEventListener('click', () => {
    responsiveMenu.classList.remove('menuActive');
    divLogo.classList.remove('hide');
    navBar.classList.remove('active');
    responsiveButtonClose.classList.remove('active');
})







