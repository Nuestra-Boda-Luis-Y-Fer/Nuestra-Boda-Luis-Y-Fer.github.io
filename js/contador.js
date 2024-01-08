// FECHA DE LA BODA
const fechaObjetivo = new Date("2024-02-24T00:00:00");

// ACTUALIZAR LA CUENTA REGRESIVA
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    // VARIABLES PARA DIAS, HORAS, MINUTOS, SEGUNDOS
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // ACTUALIZA EL ELEMENTO CON EL ID "CONTADOR"
    document.getElementById('contador').innerHTML = `
        ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos
    `;
    // SI LA FECHA HA LLEGADO MUESTRA UN MENSAJE
    if (diferencia < 0) {
        document.getElementById('contador').innerHTML = "¡La fecha ha llegado!";
    }
}
// ACTUALIZA LA CUENTA REGRESIVA CADA 1 SEGUNDO
setInterval(actualizarCuentaRegresiva, 1000);
// LLAMA A LA FUNCION INICIAL PARA EVITAR UN RETRASO EN LA VISUALIZACION
actualizarCuentaRegresiva();