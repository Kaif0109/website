// JavaScript code for the 3-bar menu functionality

// Get the menu icon and the menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.side-menu');

// Function to toggle the menu when clicking the 3-bar icon
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});