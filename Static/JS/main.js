document.addEventListener('DOMContentLoaded', function() {
    const proceedButton = document.getElementById('proceed-button');
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');

    proceedButton.addEventListener('click', function() {
        introOverlay.classList.add('hidden');
        setTimeout(() => {
            mainContent.style.display = 'block';
            footer.style.display = 'block';
            requestAnimationFrame(() => {
                mainContent.style.opacity = 1;
                footer.style.opacity = 1;
            });
        }, 1000); // Match this duration with the fade-out duration
    });

    // Show the proceed button and overlay after DOM content is loaded
    setTimeout(function() {
        proceedButton.classList.add('visible');
    }, 100); // Adjust delay as needed
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:senal2003@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
    });
});

