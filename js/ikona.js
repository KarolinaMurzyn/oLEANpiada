 // Funkcja do sprawdzania, czy element jest w zasięgu widoku
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Funkcja do sprawdzania, czy element dotyka górnej krawędzi okna przeglądarki
function isTouchingTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0;
}

// Zdarzenie przewijania
window.addEventListener('scroll', function() {
    const menuIcon = document.querySelector('.pierwszy-kafelek');
    const oleanpiadaSection = document.querySelector('#oleanpiada');
    const collageSection = document.querySelector('#collage');

    // Sprawdzenie, czy menu dotknęło sekcji #oleanpiada
    if (isTouchingTop(oleanpiadaSection)) {
        menuIcon.classList.add('show');
    }

    // Sprawdzenie, czy menu dotknęło sekcji .collage
    if (isTouchingTop(collageSection)) {
        menuIcon.classList.remove('show');
    }
});