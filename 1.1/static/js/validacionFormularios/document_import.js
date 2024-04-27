function subirArchivo() {
    const archivoInput = document.getElementById('archivoInput');
    const archivo = archivoInput.files[0];

    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(evento) {
            const contenido = evento.target.result;
            // Almacena el contenido en localStorage
            localStorage.setItem('miArchivo', contenido);
        };
        lector.readAsText(archivo);
    } else {
        console.warn('No se seleccionó ningún archivo');
    }
}

        // Manejador de eventos para el botón "Capturar Datos"
        document.getElementById('btn-capturar').addEventListener('click', function() {
            subirArchivo(); // Captura los datos
            window.open('view.html'); // Abre la nueva página
        });

