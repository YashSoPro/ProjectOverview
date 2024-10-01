document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarMenu = document.querySelector(".navbar-menu");
    const submitButton = document.getElementById("submit");
    const commentInput = document.getElementById("comment");
    const commentList = document.getElementById("comment-list");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    mobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        navbarMenu.classList.toggle("active");
    });

    submitButton.addEventListener("click", function () {
        const commentText = commentInput.value;
        if (commentText) {
            const newComment = document.createElement("p");
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            commentInput.value = "";
        }
    });
});
