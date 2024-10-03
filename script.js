// Dark mode toggle and icon update
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Load comments from localStorage
function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(commentObj => {
        const newComment = document.createElement('div');
        newComment.innerHTML = `<strong>${commentObj.name}:</strong> ${commentObj.comment}`;
        newComment.classList.add('mb-4', 'p-2', 'border', 'rounded');
        commentList.appendChild(newComment);
    });
}

// Save comment to localStorage
function saveComment(name, comment) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.push({ name, comment });
    localStorage.setItem('comments', JSON.stringify(savedComments));
}

// Handle comment submission
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
        saveComment(name, comment); // Save comment to localStorage

        commentForm.reset(); // Clear the form
    }
});

// Load comments when the page is loaded
document.addEventListener('DOMContentLoaded', loadComments);
