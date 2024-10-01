// Initialize AOS (Animate On Scroll)
AOS.init();

// Toggle Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Event listener for dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Load comments from local storage
const loadComments = () => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = ""; // Clear existing comments

    comments.forEach(comment => {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = `${comment.name}: ${comment.text}`; // Format: name: comment
        commentList.appendChild(newComment);
    });
};

// Comment submission functionality
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("nameInput").value; // Get the name
    const commentText = document.getElementById("commentInput").value; // Get the comment text
    const commentList = document
