
var currentIndex = 0;
var blocks = document.querySelectorAll('.bloque');
var scrollPrevBtn = document.getElementById('scroll-prev');
var scrollNextBtn = document.getElementById('scroll-next');

// Muestra u oculta los botones en función de la posición actual
function toggleButtonsVisibility() {
    if (currentIndex === 0) {
        scrollPrevBtn.style.display = 'none';
    } else {
        scrollPrevBtn.style.display = 'block';
    }

    if (currentIndex === blocks.length - 1) {
        scrollNextBtn.style.display = 'none';
    } else {
        scrollNextBtn.style.display = 'block';
    }
}

// Función para desplazarse al bloque específico
function scrollToBlock(direction) {
    var nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < blocks.length) {
        blocks[currentIndex].classList.add('hidden');
        currentIndex = nextIndex;
        blocks[currentIndex].scrollIntoView({ behavior: 'smooth' });

        // Actualizar el texto del botón al llegar al último bloque
        if (currentIndex === blocks.length - 1) {
            scrollNextBtn.innerHTML = '<i class="bx bx-chevrons-down"></i>';
        } else {
            scrollNextBtn.innerHTML = '<i class="bx bx-chevrons-down"></i>';
        }

        toggleButtonsVisibility();
    }
}

// Mostrar u ocultar botones al hacer scroll
document.addEventListener('scroll', function () {
    // Actualizar el índice actual basado en la posición de la página
    currentIndex = getCurrentBlockIndex();
    toggleButtonsVisibility();
});

// Mostrar el botón de scroll-prev después de llegar al segundo bloque
window.addEventListener('load', function () {
    currentIndex = getCurrentBlockIndex();
    toggleButtonsVisibility();
});

// Función para obtener el índice del bloque actual en función de la posición vertical
function getCurrentBlockIndex() {
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    for (var i = 0; i < blocks.length; i++) {
        var blockTop = blocks[i].offsetTop;
        var blockBottom = blockTop + blocks[i].offsetHeight;

        if (scrollPosition >= blockTop && scrollPosition < blockBottom) {
            return i;
        }
    }

    return currentIndex; // Devolver el índice actual si no está completamente en un bloque
}