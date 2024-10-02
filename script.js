// Include Animate.css
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');
const darkModeToggle = document.getElementById('darkModeToggle');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Comment Form Submission
commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.querySelector('textarea').value;

    if (nameInput && commentInput) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment', 'animate__animated', 'animate__fadeIn'); // Add Animate.css classes
        commentElement.innerHTML = `<strong>${nameInput}:</strong> ${commentInput}`;
        
        commentList.appendChild(commentElement);
        
        // Clear the form
        document.getElementById('nameInput').value = '';
        document.querySelector('textarea').value = '';
    }
});
