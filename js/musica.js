// SCRIPT PARA LA REPRODUCCION AUTOMATICA
var reproductor = document.getElementById('reproductor');
function toggleMute() {
    if (reproductor.muted) {
        reproductor.muted = false;
    } else {
        reproductor.muted = true;
    }
}

document.addEventListener("click", function () {
    reproductor.play();
    document.removeEventListener("click", arguments.callee);
});