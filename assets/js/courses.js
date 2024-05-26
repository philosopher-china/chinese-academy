let home_page = document.querySelector('.home-nav');
let btn = document.querySelector('.btn');

home_page.onclick = () => {
    window.location.href = "index.html";
}
btn.onclick = () => {
    window.location.href = "index.html#contact";
}