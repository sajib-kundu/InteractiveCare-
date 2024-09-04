// script.js

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add event listeners
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


// for ( let i =0; i < navLinks.length; i++){
//     navLinks[i] = 
// }
