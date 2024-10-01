document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById('nameInput');
    const commentInput = document.querySelector('textarea'); // Select the textarea

    // Create a new comment
    const newComment = document.createElement('div');
    newComment.textContent = `${nameInput.value}: ${commentInput.value}`; // Format as "name: comment"
    newComment.classList.add('comment'); // Optional: Add a class for styling

    // Add the comment to the comment list
    document.getElementById('commentList').appendChild(newComment);

    // Clear the inputs
    nameInput.value = '';
    commentInput.value = '';
});
