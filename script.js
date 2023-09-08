
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('.header .navbar #close-navbar');
let navLinks = document.querySelectorAll('.header .navbar a')

menuBtn.onclick = () =>{
    navbar.classList.add('active');
}
closeBtn.onclick = () =>{
    navbar.classList.remove('active');
}

// Prevent the click event on the navbar from propagating to the window
navbar.onclick = (event) => {
    event.stopPropagation();
}

// Close the menu when clicking anywhere outside the navbar
window.onclick = (event) => {
    if (navbar.classList.contains('active') && !navbar.contains(event.target)) {
        navbar.classList.remove('active');
    }
}

// Close the menu when a link is clicked
for (let link of navLinks) {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}
