let menuItems = document.querySelectorAll(".main-nav__item");

menuItems.forEach((item) => {
  item.addEventListener('click', e => {
    menuItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  }) 
})

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const currentPosition = window.scrollY;
  document.querySelectorAll("section").forEach((el) => {
    if (el.offsetTop <= (currentPosition + 95) && (el.offsetTop + el.offsetHeight) > currentPosition) {
      menuItems.forEach((item) => {
        item.classList.remove("active");
        if (el.getAttribute("class") === item.getAttribute("href").substring(1)) {
          item.classList.add("active");
        }
      })
    } 
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      menuItems.forEach((item) => {
        item.classList.remove("active");
        });
      menuItems[menuItems.length - 1].classList.add("active");
    }
  });
  
}

let buttonPrev = document.querySelector(".slider__prev");
let buttonNext = document.querySelector(".slider__next");
let slider1 = document.querySelector(".slider__list");
let slider2 = document.querySelector(".slider__list-2");
let display = document.querySelectorAll(".slider__display");

buttonPrev.addEventListener("click", e => {
    e.preventDefault();
    if (!slider2.classList.contains("slider-show") && !slider2.classList.contains("slider-show-reverse")) {
      slider2.classList.add("slider-show-reverse");
      slider1.classList.remove("slider-show");
      slider1.classList.remove("slider-show-reverse");
    } else {
      slider1.classList.add("slider-show-reverse");
      slider2.classList.remove("slider-show");
      slider2.classList.remove("slider-show-reverse");
      display.forEach(el => el.classList.add("slider-hide"));
    }
});
  
buttonNext.addEventListener("click", e => {
    e.preventDefault();
    if (!slider2.classList.contains("slider-show") && !slider2.classList.contains("slider-show-reverse")) {
      slider2.classList.add("slider-show");
      slider1.classList.remove("slider-show");
      slider1.classList.remove("slider-show-reverse");
    } else if (slider2.classList.contains("slider-show") || slider2.classList.contains("slider-show-reverse")) {
      slider1.classList.add("slider-show");
      slider2.classList.remove("slider-show");
      slider2.classList.remove("slider-show-reverse");
      display.forEach(el => el.classList.add("slider-hide"));
    }
});


let phones = document.querySelectorAll(".slider__item");

phones.forEach((item) => {
  item.addEventListener('click', e => {
    item.querySelector(".slider__display").classList.toggle("slider-hide");
  }) 
})


let portfolioTabs = document.querySelectorAll(".portfolio__button");
let projectsList = document.querySelector(".portfolio__projects");
let projects = document.querySelectorAll(".portfolio__item");


portfolioTabs.forEach((item) => {
  item.addEventListener('click', e => {
    portfolioTabs.forEach(el => el.classList.remove("portfolio__button--active"));
    item.classList.add("portfolio__button--active");
    let firstProject = projectsList.querySelector(".portfolio__item");
    projectsList.removeChild(firstProject);
    projectsList.appendChild(firstProject);
    let borderedProject = document.querySelector(".portfolio__border");
    if (borderedProject) {
      borderedProject.classList.remove("portfolio__border")
    };
  }) 
})

projects.forEach((item) => {
  item.addEventListener('click', e => {
    let borderedProject = document.querySelector(".portfolio__border");
    if (borderedProject) {
      borderedProject.classList.remove("portfolio__border")
    };
    if (borderedProject == item) {
      item.classList.remove("portfolio__border");
    } else {
      item.classList.add("portfolio__border");
    }
  }) 
})


let section = document.querySelector(".contact");
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
    form.reset();
  })
})

