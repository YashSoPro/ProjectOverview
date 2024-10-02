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

// Animate projects on scroll
const projects = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projects.forEach(project => {
    observer.observe(project);
});

// Animate team members on scroll
const teamMembers = document.querySelectorAll('.team-member');
const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInLeft');
            teamObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

teamMembers.forEach(member => {
    teamObserver.observe(member);
});
