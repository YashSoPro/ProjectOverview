const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Comment submission logic
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  if (name && comment) {
    const newComment = document.createElement('div');
    newComment.textContent = `${name}: ${comment}`;
    commentList.appendChild(newComment);

    commentForm.reset();
  }
});
