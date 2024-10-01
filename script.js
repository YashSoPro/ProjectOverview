document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");

    // Load comments from local storage
    loadComments();

    toggleDarkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const commentText = event.target.elements[0].value;

        const commentDiv = document.createElement("div");
        commentDiv.textContent = commentText;
        commentDiv.classList.add("comment");

        // Append the comment to the list
        commentList.appendChild(commentDiv);

        // Save comment to local storage
        saveComment(commentText);

        // Clear the textarea
        event.target.reset();
    });
});

// Function to save comments to local storage
function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to load comments from local storage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        commentDiv.classList.add("comment");
        document.getElementById("commentList").appendChild(commentDiv);
    });
}
