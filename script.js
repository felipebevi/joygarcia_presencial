// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// WhatsApp Functions
function openWhatsApp() {
    const message = "Olá! Gostaria de saber mais sobre o curso presencial de micropigmentação de sobrancelhas.";
    const whatsappUrl = `https://wa.me/5511993734899?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openGoogleMaps() {
    const address = "Av. Dr. Antônio Maria Laet, 235 - SL 02 - Tucuruvi, São Paulo - SP, 02240-000";
    const mapsUrl = `https://maps.app.goo.gl/B63cgPq5VvPKYQNd7`;
    window.open(mapsUrl, '_blank');
}

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const whatsappMessage = `Olá Joy! Meu nome é ${name}.

📧 E-mail: ${email}
📱 Telefone: ${phone}

Mensagem: ${message}

Gostaria de saber mais sobre o curso presencial de micropigmentação de sobrancelhas.`;
    
    const whatsappUrl = `https://wa.me/5511993734899?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.module-card, .material-item, .detail-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '0';
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});