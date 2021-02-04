document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const savedScheme = sessionStorage.getItem('scheme');
    if (savedScheme) {
        body.classList.remove('scheme-light');
        body.classList.add(`scheme-${savedScheme}`);
    }

    document.getElementById('theme-switch').addEventListener('click', () => {
        const currentScheme = body.className.includes('light') ? 'light' : 'dark';
        const newScheme = currentScheme === 'light' ? 'dark' : 'light';

        body.classList.remove(`scheme-${currentScheme}`);
        body.classList.add(`scheme-${newScheme}`);

        sessionStorage.setItem('scheme', newScheme);
    });
});
