// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Comment Form
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.querySelector('textarea').value;

    if (nameInput && commentInput) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${nameInput}:</strong> ${commentInput}`;
        
        commentList.appendChild(commentElement);
        
        // Clear the form
        document.getElementById('nameInput').value = '';
        document.querySelector('textarea').value = '';
    }
});
