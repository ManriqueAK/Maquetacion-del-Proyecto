const abrirRegistro = document.getElementById("abrirRegistro");

abrirRegistro.addEventListener("click", function () {

    const formulario = document.createElement("div");
    formulario.classList.add("formulario-cliente");

    const titulo = document.createElement("h2");
    titulo.textContent = "Registrar nuevo cliente";

    const nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre completo";
    nombre.required = true;

    const telefono = document.createElement("input");
    telefono.type = "tel";
    telefono.placeholder = "Teléfono";
    telefono.required = true;

    const correo = document.createElement("input");
    correo.type = "email";
    correo.placeholder = "Correo electrónico";
    correo.required = true;

    const tipo = document.createElement("select");

    const opcionNuevo = document.createElement("option");
    opcionNuevo.value = "Nuevo";
    opcionNuevo.textContent = "Nuevo";

    const opcionFrecuente = document.createElement("option");
    opcionFrecuente.value = "Frecuente";
    opcionFrecuente.textContent = "Frecuente";

    tipo.append(opcionNuevo, opcionFrecuente);

    const guardar = document.createElement("button");
    guardar.type = "button";
    guardar.textContent = "Guardar cliente";

    const cancelar = document.createElement("button");
    cancelar.type = "button";
    cancelar.textContent = "Cancelar";

    formulario.append(
        titulo,
        nombre,
        telefono,
        correo,
        tipo,
        guardar,
        cancelar
    );

    document.body.appendChild(formulario);

    guardar.addEventListener("click", function () {

        const nombreValor = nombre.value.trim();
        const telefonoValor = telefono.value.trim();
        const correoValor = correo.value.trim();
        const tipoValor = tipo.value;

        if (nombreValor === "" || telefonoValor === "" || correoValor === "") {
            alert("Completa todos los campos.");
            return;
        }

        const fila = document.createElement("tr");

        const iniciales = nombreValor
            .split(" ")
            .map(function (palabra) {return palabra[0]})
            .join("")
            .substring(0, 2)
            .toUpperCase();

        const celdaCliente = document.createElement("td");

        const avatar = document.createElement("span");
        avatar.classList.add("avatar-circle");
        avatar.textContent = iniciales;

        const nombreElemento = document.createElement("strong");
        nombreElemento.textContent = nombreValor;

        celdaCliente.append(avatar, nombreElemento);

        const celdaTelefono = document.createElement("td");
        celdaTelefono.textContent = telefonoValor;

        const celdaCorreo = document.createElement("td");
        celdaCorreo.textContent = correoValor;

        const celdaTipo = document.createElement("td");

        const estado = document.createElement("span");
        estado.classList.add("status");

        if (tipoValor === "Nuevo") {
            estado.classList.add("status-pendiente");
        } else {
            estado.classList.add("status-confirmada");
        }

        estado.textContent = tipoValor;
        celdaTipo.appendChild(estado);

        const celdaAcciones = document.createElement("td");
        celdaAcciones.classList.add("actions");

        const botonVer = document.createElement("button");
        botonVer.classList.add("btn-opciones");
        botonVer.type = "button";
        botonVer.textContent = "Ver";

        const botonEditar = document.createElement("button");
        botonEditar.classList.add("btn-opciones");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";

        celdaAcciones.append(botonVer, botonEditar);

        fila.append(
            celdaCliente,
            celdaTelefono,
            celdaCorreo,
            celdaTipo,
            celdaAcciones
        );

        document.getElementById("listaClientes").appendChild(fila);
        formulario.remove();
    });

    cancelar.addEventListener("click", function () {
        formulario.remove();
    });
});


if (sessionStorage.getItem("abrirFormularioCliente") === "true") {
    sessionStorage.removeItem("abrirFormularioCliente");
    abrirRegistro.click();
}


const buscarCliente = document.getElementById("form-control");
const listaClientes = document.getElementById("listaClientes");

buscarCliente.addEventListener("input", function () {
    const busqueda = buscarCliente.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filas = listaClientes.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {

        const celdaNombre = filas[i].getElementsByTagName("td")[0];
        const nombre = celdaNombre.querySelector("strong").textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (nombre.startsWith(busqueda)) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
});

const filtroTipo = document.getElementById("form-select-tipo");

filtroTipo.addEventListener("change" , function () {
    const tipoSeleccionado = filtroTipo.value;
    const filas = listaClientes.getElementsByTagName("tr");

    for (let i=0; i < filas.length; i++) {
        const celdaTipo = filas[i].getElementsByTagName("td")[3];
        const tipoCliente = celdaTipo.textContent.trim();

        if (tipoSeleccionado === "todos" || tipoCliente === tipoSeleccionado) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
});