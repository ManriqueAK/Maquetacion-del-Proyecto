const btnMenu = document.getElementById("btnMenu");
const barraLateral = document.getElementById("barra-lateral");
const mainContent = document.querySelector(".main-content");

if (btnMenu && barraLateral && mainContent) {
    btnMenu.addEventListener("click", function () {
        barraLateral.classList.toggle("oculta");
        mainContent.classList.toggle("expandido");
        const visible = !barraLateral.classList.contains("oculta");
        btnMenu.setAttribute("aria-expanded", visible);
    });
}


const userProfile = document.getElementById("userProfile");
const menuPerfil = document.getElementById("menuPerfil");
const userArrow = document.getElementById("userArrow");

userProfile.addEventListener("click", function (event) {
    event.stopPropagation();
    menuPerfil.classList.toggle("activo");
    userArrow.classList.toggle("rotada");
});

document.addEventListener("click", function (event) {
    if (!userProfile.contains(event.target) && !menuPerfil.contains(event.target)) {
        menuPerfil.classList.remove("activo");
        userArrow.classList.remove("rotada");
    }
});

const nuevoClienteAccion = document.getElementById("nuevoCliente");

nuevoClienteAccion.addEventListener("click" , function () {
    sessionStorage.setItem("abrirFormularioCliente", "true");
    window.location.href="clientes.html"
});

const nuevoCliente = document.getElementById("nuevosClientes")
nuevoCliente.addEventListener("click", function () {
    window.location.href = "clientes.html";
});

const citasHoy = document.getElementById("citasHoy")
citasHoy.addEventListener("click", function () {
    window.location.href = "citas.html";
});

const citasSemana = document.getElementById("citasSemana")
citasSemana.addEventListener("click", function () {
    window.location.href = "citas.html";
});

const nuevaCita = document.getElementById("nuevaCita");
nuevaCita.addEventListener("click" , function () {
    window.location.href = "citas.html";
});

const horarios = document.getElementById("configHorarios");
horarios.addEventListener("click" , function () {
    window.location.href = "horario.html";
});

const verServicios = document.getElementById("verServicios");
verServicios.addEventListener("click" , function () {
    window.location.href = "asesores.html";
});