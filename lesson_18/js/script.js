"use strict";

const slides = document.querySelectorAll('.schedule__slide-wrapper');
const lastSlidesIndex = slides.length - 1;


document.addEventListener('click', documentActions)

function documentActions(e) {
  const targetElement = e.target

  if (targetElement.closest('.icon-menu')) {
    document.documentElement.toggleAttribute('data-menu-open')
  }

  if (targetElement.closest('.header__nav a')) {
    document.documentElement.removeAttribute('data-menu-open')
  }
}

function getArrows(slide) {
  return {
    left: slide.querySelector('.schedule__arrow-left'),
    right: slide.querySelector('.schedule__arrow-right')
  };
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);

    if (i === index) {
      const { left, right } = getArrows(slide);

      left.style.display = index === 0 ? "none" : "flex";

      right.style.display = index === lastSlidesIndex ? "none" : "flex";
    }
  });
}

let currentIndex = 0;
showSlide(currentIndex); 

slides.forEach((slide) => {
  const { left, right } = getArrows(slide);

  left.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  });

  right.addEventListener('click', () => {
    if (currentIndex < lastSlidesIndex) {
      currentIndex++;
      showSlide(currentIndex);
    }
  });
});


