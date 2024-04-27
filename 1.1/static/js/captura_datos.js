function unirTexto() {
    var c1 = document.getElementById('tramites_select').value;
    var c2 = document.getElementById('nombre_select').value;
    var c3 = document.getElementById('despacho_select').value;
    var c4 = document.getElementById('camara_select').value;


    console.log(c1, c2, c3, c4);
    
    var p = c1.split(/\n/g);
    var resultado = document.getElementById('text_capture');
    var html = "";
    
    for (var i = 0; i < p.length; i++) {
        html += 'Tipo de Tramite: ' + c1 + ' ' +
            '// ' + 'Nombre: ' + c2 + ' ' +
            '// ' + 'Tipo de Despacho: ' + c3 + ' ' +
            '// ' + 'Camara: ' + c4;
    }
    
    resultado.value = html;
    resultado.style.display = "block";
}

function limpiar() {
    document.getElementById('tramites_select').value = "";
    document.getElementById('nombre_select').value = "";
    document.getElementById('despacho_select').value = "";
    document.getElementById('camara_select').value = "";

    resultado.value = "";
    resultado.style.display = "none";
}

