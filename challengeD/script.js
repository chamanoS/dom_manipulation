const carousel = document.querySelector(".images");
const slides = document.querySelectorAll(".img");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}