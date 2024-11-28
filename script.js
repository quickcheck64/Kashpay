// Wait until the DOM is fully loaded

document.addEventListener('DOMContentLoaded', () => {

    // Add event listener to WhatsApp link

    const whatsappLink = document.querySelector('.whatsapp-link');

    if (whatsappLink) {

        whatsappLink.addEventListener('click', () => {

            alert('You are being redirected to WhatsApp. Make sure to have WhatsApp installed.');

        });

    }

    // Dynamic date in footer

    const footer = document.querySelector('footer p');

    if (footer) {

        const currentYear = new Date().getFullYear();

        footer.innerHTML = `&copy; ${currentYear} Kashpay Finance. All Rights Reserved.`;

    }

    // Smooth scrolling for navigation links

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {

        link.addEventListener('click', (e) => {

            const targetID = link.getAttribute('href').substring(1);

            const targetElement = document.getElementById(targetID);

            if (targetElement) {

                e.preventDefault();

                targetElement.scrollIntoView({ behavior: 'smooth' });

            }

        });

    });

});