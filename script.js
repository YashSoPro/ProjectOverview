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
    const root = document.documentElement;

    // Function to set color scheme
    const setColorScheme = (isDark) => {
        if (isDark) {
            root.classList.add('dark');
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            root.classList.remove('dark');
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
        setColorScheme(!root.classList.contains('dark'));
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
                easing: 'easeInOutQuad'
            });
        }
    };

    // List of abusive keywords
    const abusiveKeywords = [
        'abuse', 'bastard', 'bitch', 'bullshit', 'cunt', 'dick', 'douche',
        'fag', 'fuck', 'idiot', 'jerk', 'klutz', 'moron', 'nigga', 'nigger',
        'piss', 'prick', 'pussy', 'shit', 'slut', 'twat', 'whore', 'wanker',
        'retard', 'cocksucker', 'motherfucker', 'asshole', 'faggot', 'freak',
        'loser', 'scum', 'skank', 'troll'
    ];

    // Comment form submission
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        const comment = document.getElementById('commentText').value;

        // Check for abusive comments
        const isAbusive = abusiveKeywords.some((keyword) => comment.toLowerCase().includes(keyword));
        if (isAbusive) {
            alert('Your comment contains inappropriate language. Please revise your comment.');
            return;
        }

        // Add comment to the list
        const newComment = document.createElement('div');
        newComment.classList.add('comment', 'opacity-0');
        newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;
        commentList.appendChild(newComment);

        // Animate new comment
        anime({
            targets: newComment,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            easing: 'easeOutQuad'
        });

        // Clear the form
        commentForm.reset();
    });
});
