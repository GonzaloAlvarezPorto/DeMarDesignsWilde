const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

let currentProjectSlide = 0;

function cambiarFotoProyecto(n) {
    mostrarFotoProyecto(currentProjectSlide += n);
}

function mostrarFotoProyecto(n) {
    const slides = document.querySelector('.proyectos__general').children;

    if (n >= slides.length) {
        currentProjectSlide = 0;
    } else if (n < 0) {
        currentProjectSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentProjectSlide].style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarFotoProyecto(currentProjectSlide);
});

