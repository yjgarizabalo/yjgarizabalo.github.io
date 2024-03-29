let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move")
}

navbar.onscroll = () => {
    navabar.classList.remove('open-menu');
    menu.classList.remove('move');
}

// SWIPER - MENU

var swiper = new Swiper(".reviews-content", {
    pagination: {
        el: ".swiper-pagination",
    },
});

// EMAIL JS - FORMULARIO DE CONTACTO

function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let message = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        function limpiarform() {
            document.getElementById('contact-form').reset();
            return false;
        }
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, message.value);
            success();
            limpiarform();
        }
    })

}
validate();



function sendmail(name, email, message) {
    emailjs.send("service_rec9k83", "template_vo4wvej", {
        from_name: email,
        to_name: name,
        message: message,
    });
}

function emptyerror() {
    swal({
        title: "Oh No...",
        text: "¡Los campos no pueden estar vacíos!",
        icon: "error",
    });
}
function success() {
    swal({
        title: "Correo enviado exitosamente!",
        text: "Te respondere lo antes posible.",
        icon: "success",
    });
}

// NAVBAR COLOR DE FONDO PAN

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// SCROLL TOP
let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
});

// OBTENER AÑO ACTUAL
const fecha = new Date();
let a_actual = fecha.getFullYear();
document.getElementById("fecha").innerHTML = a_actual;

