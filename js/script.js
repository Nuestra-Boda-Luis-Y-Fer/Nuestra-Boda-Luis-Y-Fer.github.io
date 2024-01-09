// SCRIPT PARA MANDAR WSP AL NOVIO 

function enviarMensaje() {
    // Número de teléfono al que se enviará el mensaje (agrega el código de país)
    var numeroTelefono = '+522271070432';

    // Mensaje que se enviará
    var mensaje = 'Hola, quiero confirmar mi asistencia';

    // Construir el enlace de WhatsApp
    var enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);

    // Abrir el enlace en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, '_blank');
}

// SCRIPT PARA MANDAR WSP A LA NOVIA
function enviarMensaje2() {
    // Número de teléfono al que se enviará el mensaje (agrega el código de país)
    var numeroTelefono = '+522481629018';

    // Mensaje que se enviará
    var mensaje = 'Hola, quiero confirmar mi asistencia';

    // Construir el enlace de WhatsApp
    var enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);

    // Abrir el enlace en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, '_blank');
}
