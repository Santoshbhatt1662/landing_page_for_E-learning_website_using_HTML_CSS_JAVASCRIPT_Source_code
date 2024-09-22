// Popup open and close logic for Login and Register forms
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const loginPopup = document.getElementById('login-popup');
const registerPopup = document.getElementById('register-popup');
const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-register');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');

// Open Login popup
loginLink.addEventListener('click', function () {
    loginPopup.style.display = 'block';
});

// Open Register popup
registerLink.addEventListener('click', function () {
    registerPopup.style.display = 'block';
});

// Close Login popup
closeLogin.addEventListener('click', function () {
    loginPopup.style.display = 'none';
});

// Close Register popup
closeRegister.addEventListener('click', function () {
    registerPopup.style.display = 'none';
});

// Switch from Login to Register
switchToRegister.addEventListener('click', function (e) {
    e.preventDefault();
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'block';
});

// Switch from Register to Login
switchToLogin.addEventListener('click', function (e) {
    e.preventDefault();
    registerPopup.style.display = 'none';
    loginPopup.style.display = 'block';
});

// Close popup if clicked outside of content
window.addEventListener('click', function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
    if (event.target === registerPopup) {
        registerPopup.style.display = 'none';
    }
});

// Optional: Add touch event zoom for mobile devices
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach(box => {
    box.addEventListener('touchstart', () => {
        box.classList.add('zoom');
    });

    box.addEventListener('touchend', () => {
        box.classList.remove('zoom');
    });
});
// Optional: Add touch event zoom for mobile devices
const container = document.querySelectorAll('.container');

serviceBoxes.forEach(box => {
    box.addEventListener('touchstart', () => {
        box.classList.add('zoom');
    });

    box.addEventListener('touchend', () => {
        box.classList.remove('zoom');
    });
});

// Optional: Add an event for the Learn More button
const learnMoreBtn = document.querySelector('.learn-more-btn');

learnMoreBtn.addEventListener('click', () => {
    alert("More information about our eLearning platform will be available soon!");
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting automatically

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // You can add further form validation here

    alert("Thank you " + name + "! Your message has been sent.");
});
