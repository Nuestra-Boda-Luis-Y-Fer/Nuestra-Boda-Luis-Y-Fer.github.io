// EFECTO DE FADE IN OUT AL HACER SCROLL ------------------------------------------------------------


// EFECTO DE SCROLL ---------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todas las secciones
    const secciones = document.querySelectorAll(".seccion");

    // Listener para el evento de scroll
    document.addEventListener("wheel", function (e) {
        // Determina la dirección del scroll
        const delta = e.deltaY || -e.detail || e.wheelDelta;

        // Encuentra la sección actual
        let seccionActual;
        secciones.forEach(function (seccion, index) {
            const rect = seccion.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                seccionActual = index;
            }
        });

        // Calcula la siguiente sección
        let siguienteSeccion;
        if (delta > 0) {
            siguienteSeccion =
                seccionActual < secciones.length - 1
                    ? seccionActual + 1
                    : seccionActual;
        } else {
            siguienteSeccion =
                seccionActual > 0 ? seccionActual - 1 : seccionActual;
        }

        // Desplazamiento suave a la siguiente sección
        window.scrollTo({
            top: secciones[siguienteSeccion].offsetTop,
            behavior: "smooth",
        });
    });
});