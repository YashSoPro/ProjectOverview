document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Handle comment submission
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('nameInput').value;
        const comment = commentForm.querySelector('textarea').value;

        if (name && comment) {
            const commentItem = document.createElement('div');
            commentItem.textContent = `${name}: ${comment}`;
            commentList.appendChild(commentItem);

            // Clear the form
            commentForm.reset();
        }
    });
});
