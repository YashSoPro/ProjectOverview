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
    const name = event.target.querySelector("input[type='text']").value; // Get the name
    const commentText = event.target.querySelector("textarea").value; // Get the comment text
    const comment = `${name}: ${commentText}`; // Format the comment
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment); // Add the new comment
    localStorage.setItem("comments", JSON.stringify(comments)); // Save to local storage
    loadComments(); // Reload comments
    event.target.reset(); // Reset the form
});

// Load comments on page load
loadComments();

// Navbar dropdown functionality
const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('nav ul');

dropdown.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggle dropdown menu
});

// Hide dropdown menu when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show'); // Hide dropdown
    }
});
