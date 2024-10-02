// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    darkModeToggle.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('darkMode', isDark);
}

// Check for saved user preference, otherwise use system preference
const savedDarkMode = localStorage.getItem('darkMode');
setDarkMode(savedDarkMode !== null ? savedDarkMode === 'true' : prefersDarkScheme.matches);

darkModeToggle.addEventListener('click', () => setDarkMode(!document.body.classList.contains('dark-mode')));

// Comment Submission
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const commentText = document.getElementById('commentText');

    if (nameInput.value.trim() === '' || commentText.value.trim() === '') {
        alert('Please fill in both name and comment fields.');
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment', 'animate__animated', 'animate__fadeIn');
    commentDiv.innerHTML = `<strong>${nameInput.value}:</strong> ${commentText.value}`;

    commentList.insertBefore(commentDiv, commentList.firstChild);

    nameInput.value = '';
    commentText.value = '';
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Join Discord button
document.getElementById('joinDiscord').addEventListener('click', function() {
    // Replace 'YOUR_DISCORD_INVITE_LINK' with your actual Discord invite link
    window.open('YOUR_DISCORD_INVITE_LINK', '_blank');
});

// Animate elements on scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
};

// Observe sections for scroll animations
const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });

// Observe each project, team member, tagline, and heading for animations
document.querySelectorAll('.project, .team-member, .tagline, h2').forEach(el => {
    observer.observe(el);
});

// View Project buttons
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function() {
        alert('Project details coming soon!');
    });
});
