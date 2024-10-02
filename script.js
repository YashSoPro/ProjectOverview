// Function to toggle the visibility of the project list
function toggleProjectList() {
    const projectList = document.getElementById("projectList");
    projectList.style.display = projectList.style.display === "none" ? "block" : "none";
}

// Function to toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Optional: Update button text based on dark mode state
    if (document.body.classList.contains("dark-mode")) {
        this.querySelector('.bgContainer > span').textContent = "Light Mode";
    } else {
        this.querySelector('.bgContainer > span').textContent = "Dark Mode";
    }
});
