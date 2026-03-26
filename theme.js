const toggle = document.getElementById('themeToggle');
const body = document.body;

const THEME_KEY = 'netflixMode';

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.setAttribute('data-theme', 'light');
    } else {
        body.classList.remove('light-theme');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.setAttribute('data-theme', 'dark');
    }
}


function loadTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
}

function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

toggle.addEventListener('click', () => {
    const active = body.classList.contains('light-theme') ? 'light' : 'dark';
    const next = active === 'light' ? 'dark' : 'light';
    applyTheme(next);
    saveTheme(next);
});

const initial = loadTheme();
applyTheme(initial);
