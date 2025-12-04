document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.navbar');

    if (!navToggle || !nav) return;

    // Otevření / zavření menu
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');

        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
    });

    // Po kliknutí na odkaz menu zavřít
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
});
