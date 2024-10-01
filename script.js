document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");

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

        // Clear the textarea
        event.target.reset();

        // Feedback message
        const feedbackMessage = document.createElement("p");
        feedbackMessage.textContent = "Comment submitted successfully!";
        feedbackMessage.style.color = "green";
        commentList.appendChild(feedbackMessage);

        // Remove feedback message after a few seconds
        setTimeout(() => {
            feedbackMessage.remove();
        }, 3000);
    });
});
