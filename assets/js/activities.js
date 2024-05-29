// ========================== Редиректы на странице "Мероприятия" ================================

let home_page = document.querySelector('.home-nav');

home_page.onclick = () => {
    window.location.href = "index.html";
}

const slider = document.querySelector(".activities-page-items");
const slides = document.querySelectorAll(".activities-page-item");
const button = document.querySelectorAll(".activities-page-button");

let current = 1;
let prev = 0;
let next = 2;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

// Обработка перелистывания на следующий рисунок
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

// Обработка перелистывания на предыдущий рисунок
const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

// Основная функция карусели
const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 3) {
        next = 0;
    }

    if (prev == -1) {
        prev = 2;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}