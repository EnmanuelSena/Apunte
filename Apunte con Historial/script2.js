// Asegúrate de que esta función esté definida al principio del archivo
function irAlModulo1() {
    window.location.href = "apunte.html"; // Redirige al archivo 'apunte.html'
}

// Funciones anteriores para el historial...
function filtrarHistorial() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const historialDiv = document.getElementById('apuntesHistorial');
    
    // Limpiar el historial actual
    historialDiv.innerHTML = '';

    // Filtrar y mostrar los apuntes que coinciden con la búsqueda
    apuntes
        .filter(apunte => apunte.nombre.toLowerCase().includes(searchValue))
        .forEach((apunte, index) => {
            const apunteItem = document.createElement('div');
            apunteItem.classList.add('apunte-item');
            
            apunteItem.innerHTML = `
                <p><strong>${index + 1}. Nombre:</strong> ${apunte.nombre}</p>
                <p><strong>Opción:</strong> ${apunte.opcion}</p>
                <p><strong>Fecha:</strong> ${apunte.fecha}</p>
                <p><strong>Hora:</strong> ${apunte.hora}</p>
                <p><strong>Precio:</strong> ${apunte.precio}</p>
            `;
            historialDiv.appendChild(apunteItem);
        });
}
