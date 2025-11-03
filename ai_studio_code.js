document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    revealButton.addEventListener('click', () => {
        // Oculta la pantalla de bienvenida con un fade out
        welcomeScreen.classList.add('hidden');

        // Después de que termine la animación de fade out, muestra el contenido principal
        welcomeScreen.addEventListener('transitionend', () => {
            welcomeScreen.style.display = 'none'; // Oculta completamente el elemento
            mainContent.classList.remove('hidden'); // Remueve la clase 'hidden' para mostrar el contenido
            mainContent.style.opacity = '1'; // Asegura que el contenido principal sea visible
        }, { once: true }); // El { once: true } asegura que el evento se dispare solo una vez
    });
});