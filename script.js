// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Comment Submission
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    const nameInput = document.getElementById('nameInput');
    const commentText = commentForm.querySelector('textarea').value;

    // Create a new comment element
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${nameInput.value}:</strong> ${commentText}`;

    // Append the comment to the comment list
    commentList.appendChild(commentDiv);

    // Clear the form inputs
    nameInput.value = '';
    commentForm.querySelector('textarea').value = '';
});
