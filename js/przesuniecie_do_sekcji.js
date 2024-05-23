function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const currentPosition = window.scrollY; // bieżąca pozycja przewijania strony
        const targetPosition = section.offsetTop - 195; // docelowa pozycja przewijania strony
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}
