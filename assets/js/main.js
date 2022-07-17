let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move")
}

// SWIPER - MENU

var swiper = new Swiper(".reviews-content", {
    pagination: {
        el: ".swiper-pagination",
    },
});