let currentSlide = 0;
const slides = document.querySelectorAll(".steps_slide");
const spans = document.querySelector(".steps_spans");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.add('steps_slide_disactive');
    slide.classList.remove('steps_slide_active');
  });

  slides[index].classList.add('steps_slide_active');
  slides[index].classList.remove('steps_slide_disactive');
}

function nextSlide() {
  currentSlide = currentSlide + 1;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = currentSlide - 1;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Добавляем кнопки для переключения между слайдами

const buttonNext = document.querySelector("#next");
buttonNext.addEventListener("click", () => {
    nextSlide();
    spans.children[currentSlide].style.backgroundColor = "#313131";
    spans.children[currentSlide - 1].style.backgroundColor = "#adadad";
  if (currentSlide === 1) {
    buttonPrev.style.backgroundColor = "#313131";
    buttonPrev.disabled = false;
  } else if (currentSlide === 4) {
    buttonNext.style.backgroundColor = "#adadad";
    buttonNext.disabled = true;
  }
});

const buttonPrev = document.querySelector("#prev");
buttonPrev.addEventListener("click", () => {
    spans.children[currentSlide].style.backgroundColor = "#adadad";
    spans.children[currentSlide - 1].style.backgroundColor = "#313131";
    prevSlide();
  if (currentSlide === 0) {
    buttonPrev.style.backgroundColor = "#adadad";
    buttonPrev.disabled = true;
  } else if (currentSlide === 3) {
    buttonNext.style.backgroundColor = "#313131";
    buttonNext.disabled = false;
  }
});
