document.addEventListener("DOMContentLoaded", function() {
    // Get the menu icon, the menu, and the overlay
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.side-menu');
    const overlay = document.getElementById('overlay');

    // Function to toggle the menu when clicking the 3-bar icon
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
        overlay.classList.toggle('active'); // Toggle the overlay to dim the body
        document.body.classList.toggle('dimmed'); // Add/remove the dimmed effect on the body
        menuIcon.classList.toggle('open'); // Change the icon to an "X" when the menu is open
    });

    // Close the menu when clicking on the overlay
    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('dimmed');
        menuIcon.classList.remove('open'); // Reset the menu icon to hamburger
    });

    // Close the menu when clicking on the close button inside the menu
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('dimmed');
        menuIcon.classList.remove('open'); // Reset the menu icon to hamburger
    });
});
