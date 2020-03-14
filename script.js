let menuItems = document.querySelectorAll(".main-nav__item");

// for (let i = 0; i < menuItems.length; i++) {
//   for (let j = 0; j < menuItems.length; j++) {
//       menuItems[j].addEventListener('click', e => {
//         menuItems[j].classList.add("active"); 
//         if ( i !== j && menuItems[i].classList.contains("active")) {
//           menuItems[i].classList.remove("active");
//         }
//       }) 
//   }

// }

menuItems.forEach((item) => {
  item.addEventListener('click', e => {
    menuItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  }) 
})

let buttonPrev = document.querySelector(".slider__prev");
let buttonNext = document.querySelector(".slider__next");
let slider = document.querySelector(".slider__list-2");
let display = document.querySelectorAll(".slider__display");

buttonPrev.addEventListener("click", e => {
  e.preventDefault();
  slider.classList.toggle("slider-hide");
  display.forEach(el => el.classList.add("slider-hide"));
 });

 buttonNext.addEventListener("click", e => {
  e.preventDefault();
  slider.classList.toggle("slider-hide");
  display.forEach(el => el.classList.add("slider-hide"));
 });


let phones = document.querySelectorAll(".slider__item");

phones.forEach((item) => {
  item.addEventListener('click', e => {
    item.querySelector(".slider__display").classList.toggle("slider-hide");
  }) 
})


let portfolioTabs = document.querySelectorAll(".portfolio__button");
let projectsList = document.querySelector(".portfolio__projects");
let project = document.querySelectorAll(".portfolio__item");


portfolioTabs.forEach((item, i) => {
  item.addEventListener('click', e => {
    portfolioTabs.forEach(el => el.classList.remove("portfolio__button--active"));
    item.classList.add("portfolio__button--active");
    projectsList.removeChild(project[i - 1]);
    projectsList.appendChild(project[i - 1]);
  }) 
})

project.forEach((item) => {
  item.addEventListener('click', e => {
    project.forEach(el => el.classList.remove("portfolio__border"));
    item.classList.add("portfolio__border");
  }) 
})



let section = document.querySelector(".feedback");
let form = document.querySelector("form");
let subject = section.querySelector('[name = subject]');
let description = section.querySelector('[name = feedback]');

form.addEventListener("submit", e => {
  e.preventDefault();

  const popup = document.createElement("div");
  popup.classList.add("form-info");
  popup.textContent = "Письмо отправлено";
  section.appendChild(popup);

  const popupSubject = document.createElement("div");
  popupSubject.classList.add("info-text");
  if (subject.value) {
    popupSubject.textContent = `Тема: ${subject.value}`;
  } else {
    popupSubject.textContent = "Без темы";
  }
  popup.appendChild(popupSubject);

  const popupDescription = document.createElement("div");
  popupDescription.classList.add("info-text");
  if (description.value) {
    popupDescription.textContent = `Описание: ${description.value}`;
  } else {
    popupDescription.textContent = "Без описания";
  }
  popup.appendChild(popupDescription);

  const button = document.createElement("button");
  button.textContent = "OK";
  button.classList.add("popup-button")
  popup.appendChild(button);

  button.addEventListener("click", e => {
    e.preventDefault();
    section.removeChild(popup);
  })
})

