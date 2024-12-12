// Get the menu icon, the menu, and the overlay
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.side-menu');
const overlay = document.getElementById('overlay');

// Function to toggle the menu when clicking the 3-bar icon
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
    overlay.classList.toggle('active'); // Toggle the overlay to dim the body
    document.body.classList.toggle('dimmed'); // Add/remove the dimmed effect on the body
});

// Close the menu when clicking on the overlay or the close button
overlay.addEventListener('click', () => {
    menu.classList.remove('open'); // Close the menu
    overlay.classList.remove('active'); // Remove the overlay
    document.body.classList.remove('dimmed'); // Remove the dimmed effect on the body
});

// Get the close button in the menu (cross button) and add the event listener
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    menu.classList.remove('open'); // Close the menu
    overlay.classList.remove('active'); // Remove the overlay
    document.body.classList.remove('dimmed'); // Remove the dimmed effect on the body
});// JavaScript code for the 3-bar menu functionality

// Get the menu icon and the menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.side-menu');

// Function to toggle the menu when clicking the 3-bar icon
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});