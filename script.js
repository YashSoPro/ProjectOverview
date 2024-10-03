document.addEventListener('DOMContentLoaded', () => {
    // Links to the projects
    document.getElementById('openimgLink').setAttribute('href', 'https://github.com/YashSoPro/OpenIMG');
    document.getElementById('projectadLink').setAttribute('href', 'https://github.com/YashSoPro/projectad');
    document.getElementById('emuinaboxLink').setAttribute('href', 'https://github.com/YashSoPro/emuinabox');
    // Discord link
    document.getElementById('joinDiscord').setAttribute('href', 'https://discord.com/invite/6quw5YTRnf');

    // Anime.js animations
    const tagline = document.getElementById('tagline');
    anime({
        targets: tagline,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.project-card',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.team-member',
        scale: [0.9, 1],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutSine'
    });

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

    // Listen for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            setColorScheme(e.matches);
        }
    });

    // Scroll to section function
    window.scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            anime({
                targets: document.documentElement,
                scrollTop: section.offsetTop,
                duration: 800,
                easing: '
