// DataGeek Consultoria - Enhanced Website
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeStickyHeader();
    initializeAnimations();
    initializeExpandableServices();
    initializeContactTab();
});

// Sticky Header functionality
function initializeStickyHeader() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initializeSlider() {
    const slider = document.getElementById('heroSliderTrack');
    const slides = document.querySelectorAll('.slide');
    
    // Set up slider properties
    if (slider && slides.length > 0) {
        // Add error handling for images
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img) {
                img.addEventListener('error', function() {
                    console.log('Error loading image:', this.src);
                    // Fallback to DataGeek logo if client image doesn't exist
                    this.src = 'img/DataGeek-Logo.png';
                });
                
                img.addEventListener('load', function() {
                    console.log('Successfully loaded image:', this.src);
                });
            }
        });
    }
}

// Navigation smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// Expandable Services functionality
function initializeExpandableServices() {
    const serviceItems = document.querySelectorAll('.service-expandable-item');
    
    serviceItems.forEach(item => {
        const header = item.querySelector('.service-header');
        const content = item.querySelector('.service-content');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
        
        // Add keyboard support
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
        
        // Make header focusable
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        // Update aria-expanded when toggled
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isExpanded = item.classList.contains('active');
                    header.setAttribute('aria-expanded', isExpanded.toString());
                }
            });
        });
        
        observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
}

// Contact Tab functionality
function initializeContactTab() {
    const contactTab = document.querySelector('.contact-tab');
    const contactTabButton = document.getElementById('contactTabButton');
    const contactForm = document.querySelector('.contact-form-footer');
    
    if (contactTabButton) {
        contactTabButton.addEventListener('click', function() {
            contactTab.classList.toggle('active');
        });
    }
    
    // Close contact tab when clicking outside
    document.addEventListener('click', function(e) {
        if (!contactTab.contains(e.target)) {
            contactTab.classList.remove('active');
        }
    });
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
            contactTab.classList.remove('active');
        });
    }
}

