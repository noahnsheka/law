document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (anchor links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const nameInput = document.getElementById('name') || document.querySelector('input[placeholder*="Name"]');
            const emailInput = document.getElementById('email') || document.querySelector('input[placeholder*="Email"]');
            
            const clientName = nameInput ? nameInput.value : 'Client';
            
            alert(`Thank you ${clientName} for reaching out. We will review your request and get back to you shortly.`);
            contactForm.reset();
        });
    }

    // Hamburger menu toggle logic (placeholder for mobile nav)
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if(navLinks) {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});