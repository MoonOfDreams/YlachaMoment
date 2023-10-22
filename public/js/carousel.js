const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide .carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

slides[currentIndex].classList.add("active");
function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add("active");
}

function changeSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex += direction;
  showSlide(currentIndex);
}

prevBtn.addEventListener("click", () => {
  changeSlide(-1);
});

nextBtn.addEventListener("click", () => {
  changeSlide(1);
});

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);
