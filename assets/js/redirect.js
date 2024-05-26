// ========================== Обработка редиректа на новые страницы ================================

let courses_box = document.querySelector('#courses');
let exams_box = document.querySelector('#exams');
let study_box = document.querySelector('#study');
let activities_box = document.querySelector('#activities');

courses_box.onclick = () => {
    window.location.href = "courses.html";
}

exams_box.onclick = () => {
    window.location.href = "exams.html";
}

study_box.onclick = () => {
    window.location.href = "study.html";
}

activities_box.onclick = () => {
    window.location.href = "activities.html";
}