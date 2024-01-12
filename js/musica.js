var reproductor = document.getElementById('reproductor');
var pauseIcon = document.getElementById('pause-icon');

function togglePlayPause() {
    if (reproductor.paused) {
        reproductor.play();
        pauseIcon.innerHTML = '<i style="font-size: 30px;" class="bx bx-pause-circle"></i>';
    } else {
        reproductor.pause();
        pauseIcon.innerHTML = '<i style="font-size: 30px;" class="bx bx-play-circle"></i>';
    }
}

// Reproducir automáticamente al hacer clic en cualquier parte de la página
document.addEventListener("click", function () {
    reproductor.play();
    document.removeEventListener("click", arguments.callee);
});