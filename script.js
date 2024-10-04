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
    const body = document.body;

    // Function to set color scheme
    const setColorScheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
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
        setColorScheme(!body.classList.contains('dark'));
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

    // Function to save comments to localStorage
    const saveComments = (comments) => {
        localStorage.setItem('comments', JSON.stringify(comments));
    };

    // Function to load comments from localStorage
    const loadComments = () => {
        const savedComments = localStorage.getItem('comments');
        return savedComments ? JSON.parse(savedComments) : [];
    };

    // Function to render comments
    const renderComments = (comments) => {
        const commentList = document.getElementById('commentList');
        commentList.innerHTML = ''; // Clear existing comments
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerText = `${comment.name}: ${comment.text}`;
            commentList.appendChild(commentDiv);
        });
    };

    // Load and render saved comments
    const comments = loadComments();
    renderComments(comments);

    // Handle comment submission
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const nameInput = document.getElementById('nameInput');
        const commentText = document.getElementById('commentText');

        // Create a new comment
        const newComment = {
            name: nameInput.value,
            text: commentText.value
        };

        // Add new comment to the array
        comments.push(newComment);

        // Save updated comments to localStorage
        saveComments(comments);

        // Re-render comments
        renderComments(comments);

        // Clear input fields
        nameInput.value = '';
        commentText.value = '';
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
