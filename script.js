// Initialize AOS (Animate On Scroll)
AOS.init();

// Toggle Dark Mode
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

    // Clear the form
    commentForm.reset();
});

// Dropdown menu functionality
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
