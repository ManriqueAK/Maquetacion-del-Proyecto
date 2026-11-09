const btnLogin = document.getElementById("inicioSesion");
btnLogin.addEventListener("click", function () {
    window.location.href = "login.html"
})

const carrusel = document.getElementById("carrusel");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const fichas = document.querySelectorAll(".ficha");

let posicion = 0;

function fichasVisibles() {
    if (window.innerWidth <= 600) {
        return 1;
    } else if (window.innerWidth <= 900) {
        return 2;
    } else {
        return 3;
    }
}

function actualizarCarrusel() {
    const visibles = fichasVisibles();
    const anchoFicha = fichas[0].getBoundingClientRect().width;
    const espacio = 20;
    const desplazamiento = posicion * (anchoFicha + espacio);
    carrusel.style.transform = `translateX(-${desplazamiento}px)`;
}

siguiente.addEventListener("click", () => {
    const visibles = fichasVisibles();
    if (posicion < fichas.length - visibles) {
        posicion++;
    } else {
        posicion = 0;
    }
    actualizarCarrusel();
});

anterior.addEventListener("click", () => {
    const visibles = fichasVisibles();
    if (posicion > 0) {
        posicion--;
    } else {
        posicion = fichas.length - visibles;
    }
    actualizarCarrusel();
});
