document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("nameInput").value;
    const commentInput = event.target[1].value; // Get the comment from the textarea

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
