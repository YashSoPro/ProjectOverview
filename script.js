// Initialize AOS (Animate On Scroll)
AOS.init();

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Comment submission handling
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const nameInput = document.getElementById('nameInput').value;
    const commentInput = commentForm.querySelector('textarea').value;

    // Create a new comment element
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.textContent = `${nameInput}: ${commentInput}`;
    
    // Append the new comment to the comment list
    commentList.appendChild(comment);

    // Clear the input fields
    commentForm.reset();
});

// Navbar dropdown functionality for mobile
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !event.target.matches('nav ul *')) {
        const menu = document.querySelector('nav ul');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
});
