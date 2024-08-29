const apuntes = [
    { nombre: 'Juan', opcion: 'Corte', fecha: '2024-08-27', hora: '14:00', precio: 20 },
    { nombre: 'Ana', opcion: 'Afeitada', fecha: '2024-08-27', hora: '15:00', precio: 15 }
];
localStorage.setItem('apuntes', JSON.stringify(apuntes));
