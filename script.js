let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function sendToWhatsApp() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Combine all data into a WhatsApp message
    const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Phone:* ${phoneNumber}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

    // WhatsApp API link with pre-filled message
    const whatsappUrl = `https://wa.me/8178940931?text=${whatsappMessage}`;

    
    window.open(whatsappUrl, '_blank');

    // Or redirect in same window
    // window.location.href = whatsappUrl;
}
