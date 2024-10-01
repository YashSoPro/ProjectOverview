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
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    });
};

// Comment submission functionality
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const commentText = event.target.querySelector("textarea").value; // Get the comment text
    const commentList = document.getElementById("commentList"); // Reference to the comment list

    // Create a new comment div
    const newComment = document.createElement("div");
    newComment.classList.add("comment"); // Add comment class
    newComment.textContent = commentText; // Set the comment text
    commentList.appendChild(newComment); // Append the new comment to the list

    // Save comment to local storage
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    event.target.reset(); // Reset the form
});

// Load comments on page load
loadComments();
