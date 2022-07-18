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
})