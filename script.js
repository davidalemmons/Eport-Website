// script.js
let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-images img");
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  const newTransformValue = `translateX(-${slideIndex * 100}%)`;
  document.querySelector(".carousel-images").style.transform = newTransformValue;
}
