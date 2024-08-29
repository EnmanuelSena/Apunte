function irAlHistorial() {
    window.location.href = "modulo2.html"; // Asegúrate de que el archivo 'modulo2.html' exista
}

const apuntes = [];

function guardarApunte() {
    const nombre = document.getElementById('nombre').value;
    const opcion = document.getElementById('opcion').value;
    const hora = document.getElementById('hora').value;
    const fecha = new Date().toLocaleDateString();

    let precio;
    switch (opcion) {
        case 'corte':
            precio = '$300';
            break;
        case 'cerquillo':
            precio = '$150';
            break;
        case 'afeitada':
            precio = '$100';
            break;
        default:
            precio = '$0';
            break;
    }

    const apunte = { nombre, opcion, hora, fecha, precio };
    apuntes.push(apunte);

    mostrarApunte(apunte);
}

function mostrarApunte(apunte) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${apunte.nombre}</p>
        <p><strong>Opción:</strong> ${apunte.opcion}</p>
        <p><strong>Fecha:</strong> ${apunte.fecha}</p>
        <p><strong>Hora:</strong> ${apunte.hora}</p>
        <p><strong>Precio:</strong> ${apunte.precio}</p>
    `;
}
