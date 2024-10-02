document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("nameInput").value;
    const commentInput = document.getElementById("commentInput").value; // Get the comment from the textarea

    // Create a new comment element
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = `${nameInput}: ${commentInput}`;
    
    // Append the new comment to the comment list
    document.getElementById("commentList").appendChild(commentElement);
    
    // Clear the form
    event.target.reset();
});

// Dark/Light Mode Toggle Functionality
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
});

// Hamburger Menu Functionality
const hamburger = document.getElementById("hamburger");
const navbarContent = document.getElementById("navbarContent");

hamburger.addEventListener("click", function() {
    navbarContent.classList.toggle("show");
});

// Close the menu when clicking outside
window.addEventListener("click", function(event) {
    if (!event.target.matches('.hamburger') && navbarContent.classList.contains('show')) {
        navbarContent.classList.remove("show");
    }
});
