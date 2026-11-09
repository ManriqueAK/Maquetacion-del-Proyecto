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

const nuevoCliente = document.getElementById("nuevosClientes")
nuevoCliente.addEventListener("click", function () {
    window.location.href = "clientes.html";
})

//

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

