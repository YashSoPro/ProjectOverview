document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code remains the same)

    // Toggle dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const html = document.documentElement;

    // Function to set color scheme
    const setColorScheme = (isDark) => {
        if (isDark) {
            html.classList.add('dark');
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            html.classList.remove('dark');
            toggleIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    // Check for saved color scheme preference or system preference
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 
         localStorage.getItem('darkMode') !== 'disabled')) {
        setColorScheme(true);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        setColorScheme(!html.classList.contains('dark'));
    });

    // ... (rest of the code remains the same)
});
