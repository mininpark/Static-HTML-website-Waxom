const hamburger = document.querySelector('.container .hamburger');
const title = document.querySelector('.container .navbar_main');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

