// LUDOVIKA - Main JavaScript

// Contact Modal Management
class ContactModal {
    constructor() {
        this.modal = null;
        this.formLoaded = false;
        this.init();
    }
    
    init() {
        // Create modal HTML
        this.createModal();
        
        // Bind all contact buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-contact-modal') || 
                e.target.closest('.btn-contact-modal')) {
                e.preventDefault();
                this.open();
            }
        });
        
        // Close on click outside
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.close();
                }
            });
        }
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.close();
            }
        });
    }
    
    createModal() {
        const modalHTML = `
            <div class="contact-modal" id="contactModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Ein erstes Gespräch</h2>
                        <button class="modal-close" aria-label="Schließen">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="js-hm-form" id="kreativmanagement" data-theme="default" data-form-id="03f11fdf-d79a-4bfd-ada2-fbb6d3d21181"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('contactModal');
        
        // Bind close button
        const closeBtn = this.modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }
    }
    
    open() {
        if (this.modal) {
            this.modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
    
    close() {
        if (this.modal) {
            this.modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
}

// Initialize Contact Modal
document.addEventListener('DOMContentLoaded', function() {
    new ContactModal();
});

// Navigation Toggle (Mobile)
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = this.textContent;
            this.textContent = icon === '☰' ? '✕' : '☰';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.textContent = '☰';
            });
        });
    }
});

// Cookie Banner Management
class CookieManager {
    constructor() {
        this.banner = document.querySelector('.cookie-banner');
        this.acceptBtn = document.querySelector('.cookie-accept');
        this.declineBtn = document.querySelector('.cookie-decline');
        
        this.init();
    }
    
    init() {
        // Check if user has already made a choice
        if (!this.hasConsent()) {
            this.showBanner();
        }
        
        // Event listeners
        if (this.acceptBtn) {
            this.acceptBtn.addEventListener('click', () => this.accept());
        }
        
        if (this.declineBtn) {
            this.declineBtn.addEventListener('click', () => this.decline());
        }
    }
    
    hasConsent() {
        return localStorage.getItem('cookieConsent') !== null;
    }
    
    showBanner() {
        if (this.banner) {
            setTimeout(() => {
                this.banner.classList.add('show');
            }, 1000);
        }
    }
    
    hideBanner() {
        if (this.banner) {
            this.banner.classList.remove('show');
        }
    }
    
    accept() {
        localStorage.setItem('cookieConsent', 'accepted');
        this.hideBanner();
        this.loadAnalytics();
    }
    
    decline() {
        localStorage.setItem('cookieConsent', 'declined');
        this.hideBanner();
    }
    
    loadAnalytics() {
        // Placeholder for analytics loading
        // Add Google Analytics or other tracking code here if needed
        console.log('Analytics loaded');
    }
}

// Initialize Cookie Manager
document.addEventListener('DOMContentLoaded', function() {
    new CookieManager();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.image-grid-item, .product-card, .gallery-item');
    elements.forEach(el => observer.observe(el));
});

// Image lazy loading fallback (modern browsers support it natively)
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
