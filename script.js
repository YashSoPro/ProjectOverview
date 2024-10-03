document.addEventListener('DOMContentLoaded', () => {
    // Links to the projects
    document.getElementById('openimgLink').setAttribute('href', 'https://github.com/YashSoPro/OpenIMG');
    document.getElementById('projectadLink').setAttribute('href', 'https://github.com/YashSoPro/projectadd');
    document.getElementById('emuinaboxLink').setAttribute('href', 'https://github.com/YashSoPro/emuinabox');

    // Discord link
    document.getElementById('joinDiscord').setAttribute('href', 'https://discord.gg/byAggyEXNA');

    // Toggle dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Scroll to section function
    window.scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Comment form submission
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('nameInput').value;
        const comment = document.getElementById('commentText').value;

        if (name && comment) {
            const newComment = document.createElement('div');
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
            newComment.classList.add('mb-4', 'p-2', 'border', 'rounded');

            commentList.appendChild(newComment);

            // Reset the form
            commentForm.reset();
        }
    });
});
