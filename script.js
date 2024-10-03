document.addEventListener('DOMContentLoaded', () => {
    // Links to the projects
    document.getElementById('openimgLink').setAttribute('href', 'https://github.com/YashSoPro/OpenIMG');
    document.getElementById('projectadLink').setAttribute('href', 'https://github.com/YashSoPro/projectad');
    document.getElementById('emuinaboxLink').setAttribute('href', 'https://github.com/YashSoPro/emuinabox');

    // Discord link
    document.getElementById('joinDiscord').setAttribute('href', 'https://discord.com/invite/6quw5YTRnf');

    // Toggle dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');

    // Check if dark mode is already set in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        console.log('Dark mode toggled'); // Debugging line

        // Change icon based on mode
        if (document.body.classList.contains('dark')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled'); // Store in localStorage
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'disabled'); // Store in localStorage
        }
    });

    // Scroll to section function
    window.scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
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
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;
        commentList.appendChild(newComment);

        // Clear the form
        commentForm.reset();
    });
});
