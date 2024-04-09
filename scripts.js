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


let currentMembers = 0;
const members = document.querySelector('.members_desktop')
const members_desktop = document.querySelectorAll('#members_desktop')
const number = document.querySelector('.number_desk');

function showMembers() {
  members.children[currentMembers].style.display = 'none';
  currentMembers = (currentMembers + 1) % 2;
  members.children[currentMembers].style.display = 'flex';

  number.innerHTML = currentMembers * 3 + 3;
}

members_desktop[0].addEventListener('click', showMembers)
members_desktop[1].addEventListener('click', showMembers)

setInterval(showMembers, 4000)


let currentMember = 0;
const members_mobile = document.querySelectorAll(".member_mobile");
const buttonPrev_mobile = document.querySelector('#members_prev_mobile');
const buttonNext_mobile = document.querySelector('#members_next_mobile');
const number_mobile = document.querySelector('.number_mobile');

console.log(members_mobile)

function showMember(index = ++currentMember) {
  index = index % 6;

  number_mobile.innerHTML = index+1;
  
  members_mobile.forEach((member) => {
    member.style.display = 'none';
    
  });

  members_mobile[index].style.display = 'flex';
}

buttonPrev_mobile.addEventListener('click', () => showMember(--currentMember))
buttonNext_mobile.addEventListener('click', () => showMember(++currentMember))

setInterval(showMember, 4000)