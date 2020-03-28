const button = document.querySelector('.main-nav__button');
const menu = document.querySelector('.main-nav__list')
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.main-nav__logo');

button.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('main-nav__list-show');
  overlay.classList.toggle('main-nav__list-show');
  logo.classList.toggle('main-nav__logo-hide');
  if (button.classList.contains('main-nav__button--rotate')) {
    button.classList.add('main-nav__button--rotate-reverse');
    button.classList.remove('main-nav__button--rotate');
  } else {
    button.classList.remove('main-nav__button--rotate-reverse');
    button.classList.add('main-nav__button--rotate');
  }
 });

overlay.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('main-nav__list-show');
  overlay.classList.toggle('main-nav__list-show');
  logo.classList.toggle('main-nav__logo-hide');
  if (button.classList.contains('main-nav__button--rotate')) {
    button.classList.add('main-nav__button--rotate-reverse');
    button.classList.remove('main-nav__button--rotate');
  } else {
    button.classList.remove('main-nav__button--rotate-reverse');
    button.classList.add('main-nav__button--rotate');
  }
});


const menuElements = document.querySelectorAll(".main-nav__item");

menuElements.forEach((item) => {
  item.addEventListener('click', e => {
    menuElements.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
    menu.classList.toggle('main-nav__list-show');
    overlay.classList.toggle('main-nav__list-show');
    logo.classList.toggle('main-nav__logo-hide');
    if (button.classList.contains('main-nav__button--rotate')) {
      button.classList.add('main-nav__button--rotate-reverse');
      button.classList.remove('main-nav__button--rotate');
    } else {
      button.classList.remove('main-nav__button--rotate-reverse');
      button.classList.add('main-nav__button--rotate');
    }
  }) 
})