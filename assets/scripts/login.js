const correo = document.getElementById("correo");
const formulario = document.querySelector("form");
const mensajeCorreo = document.createElement("p");

correo.insertAdjacentElement("afterend", mensajeCorreo);

function validarCorreo() {

    let valor = correo.value.trim();
    let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (patron.test(valor)) {
        mensajeCorreo.textContent = "Correo válido.";
        mensajeCorreo.style.color = "green";
        return true;
    } else {
        mensajeCorreo.textContent = "Debes ingresar un correo válido.";
        mensajeCorreo.style.color = "red";
        return false;
    }
};

correo.addEventListener("input", validarCorreo);


formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let correoValido = validarCorreo();

    if (correoValido === true) {
        window.location.href = "panel.html";
    } else {
        alert("No puedes ingresar. Revisa los datos del formulario.");
    }
});
