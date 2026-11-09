const password = document.getElementById("password");
const correo = document.getElementById("correo");
const formulario = document.querySelector("form");
const mensajePassword = document.createElement("p");
const mensajeCorreo = document.createElement("p");

password.insertAdjacentElement("afterend", mensajePassword);
correo.insertAdjacentElement("afterend", mensajeCorreo);

function validarCorreo() {

    let valor = correo.value.trim();
    let patron = /^[^\s@]+@gmail\.com$/i;

    if (patron.test(valor)) {
        mensajeCorreo.textContent = "Correo válido.";
        mensajeCorreo.style.color = "green";
        return true;
    } else {
        mensajeCorreo.textContent = "Debes ingresar un correo válido de Gmail.";
        mensajeCorreo.style.color = "red";
        return false;
    }
};

function validarPassword () {
    let valor = password.value;

    let longitud = valor.length >= 8;
    let mayuscula = /[A-Z]/.test(valor);
    let especial = /[^A-Za-z0-9]/.test(valor);

    let errores = [];

    if (!longitud) {
        errores.push("Mínimo 8 caracteres.");
    }

    if (!mayuscula) {
        errores.push("Debe contener una mayúscula.");
    }

    if (!especial) {
        errores.push("Debe contener un carácter especial.");
    }

    if (errores.length === 0) {
        mensajePassword.textContent = "Contraseña segura.";
        mensajePassword.style.color = "green";
    } else {
        mensajePassword.innerHTML = errores.join("<br>");
        mensajePassword.style.color = "red";
    }
    return errores.length === 0;
};


password.addEventListener("input", validarPassword);
correo.addEventListener("input", validarCorreo);


formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let passwordValida = validarPassword();
    let correoValido = validarCorreo();

    if (passwordValida && correoValido) {
        window.location.href = "panel.html";
    } else {
        alert("No puedes ingresar. Revisa los datos del formulario.");
    }
});
