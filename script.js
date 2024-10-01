$(document).ready(function () {
    // Initialize AOS
    AOS.init();

    // Comment submission
    $('#comment-submit').click(function () {
        const comment = $('#comment').val();
        if (comment) {
            alert(`Comment submitted: ${comment}`);
            $('#comment').val('');
        } else {
            alert('Please enter a comment.');
        }
    });

    // Hamburger menu toggle
    $('.navbar-toggle').click(function () {
        $('.navbar-container').toggleClass('active');
    });

    // GSAP animation
    gsap.from('.hero', { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
});
