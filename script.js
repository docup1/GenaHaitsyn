// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('article').forEach(article => {
    observer.observe(article);
});

// Add subtle parallax effect to background
let ticking = false;
document.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            document.body.style.backgroundPosition = `center ${scrolled * 0.3}px`;
            ticking = false;
        });
        ticking = true;
    }
});