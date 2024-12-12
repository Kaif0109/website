document.addEventListener("DOMContentLoaded", function() {
    // Cache DOM elements
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.side-menu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Function to toggle the menu and overlay
    function toggleMenu() {
        menu.classList.toggle('open');       // Toggle the sidebar visibility
        overlay.classList.toggle('active');  // Toggle the overlay
        document.body.classList.toggle('dimmed');  // Dim the body content
        menuIcon.classList.toggle('open');   // Change the menu icon to 'X' when open
    }

    // Event listener for the menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu when the overlay is clicked
    overlay.addEventListener('click', closeMenu);

    // Close the menu when the close button inside the menu is clicked
    closeBtn.addEventListener('click', closeMenu);

    // Function to close the menu
    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('dimmed');
        menuIcon.classList.remove('open');
    }
});
