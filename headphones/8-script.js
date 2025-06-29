document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');

    // Add a click event listener to the hamburger menu icon
    if (menuIcon && mainNav) { 
        menuIcon.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');
            menuIcon.classList.toggle('nav-open'); 
        });
    }

    // Optional: Close the menu if a navigation link is clicked (for single-page navigation)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                menuIcon.classList.remove('nav-open');
            }
        });
    });
});