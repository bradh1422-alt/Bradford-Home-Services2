// script.js

console.log("Bradford Home Services site loaded!");

// Smooth scrolling for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Show "Message Sent" alert after Formspree submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
    e.preventDefault(); // stop default submission
    const action = form.getAttribute('action');
    
    fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            form.reset();
        } else {
            alert("Oops! There was a problem. Please try again.");
        }
    }).catch(() => {
        alert("Oops! There was a problem. Please try again.");
    });
});
