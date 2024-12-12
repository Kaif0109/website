document.addEventListener("DOMContentLoaded", function() {
    // Get the menu icon, the menu, and the overlay
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.side-menu');
    const overlay = document.getElementById('overlay');

    // Function to toggle the menu when clicking the 3-bar icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'open' class to show/hide the menu
        menu.classList.toggle('open');
        
        // Toggle the overlay to dim the body
        overlay.classList.toggle('active');
        
        // Add/remove the dimmed effect on the body
        document.body.classList.toggle('dimmed');
        
        // Toggle the icon to an "X" when the menu is open
        menuIcon.classList.toggle('open');
    });

    // Close the menu when clicking on the overlay
    overlay.addEventListener('click', () => {
        closeMenu(); // Reuse the close function to remove necessary classes
    });

    // Close the menu when clicking on the close button inside the menu
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        closeMenu(); // Reuse the close function to remove necessary classes
    });

    // Function to close the menu
    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('dimmed');
        menuIcon.classList.remove('open');
    }
});