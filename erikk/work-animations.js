// Work page animations using Framer Motion
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = parseFloat(element.dataset.delay) || 0;
                
                setTimeout(() => {
                    animateElement(element);
                }, delay * 1000);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Function to animate different element types
    function animateElement(element) {
        if (element.classList.contains('animate-fade-up')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        else if (element.classList.contains('animate-slide-left')) {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-50px)';
            element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            });
        }
        
        else if (element.classList.contains('animate-slide-right')) {
            element.style.opacity = '0';
            element.style.transform = 'translateX(50px)';
            element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            });
        }
        
        else if (element.classList.contains('animate-scale-up')) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.9)';
            element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            });
        }
        
        else if (element.classList.contains('animate-category')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        else if (element.classList.contains('animate-project')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px) scale(0.95)';
            element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            });
        }
        
        else if (element.classList.contains('animate-tag')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        else if (element.classList.contains('animate-button')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        else if (element.classList.contains('animate-number')) {
            animateNumber(element);
        }
    }

    // Number counting animation
    function animateNumber(element) {
        const target = element.dataset.target;
        const targetNum = parseInt(target);
        let current = 0;
        const increment = targetNum / 20;
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetNum) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toString().padStart(2, '0');
            }
        }, 50);
    }

    // Add hover animations for project previews
    function addHoverAnimations() {
        const projectPreviews = document.querySelectorAll('.project-preview');
        
        projectPreviews.forEach(preview => {
            const img = preview.querySelector('img');
            
            preview.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                preview.style.transform = 'translateY(-5px)';
                preview.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            preview.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                preview.style.transform = 'translateY(0)';
            });
        });

        // Add hover animation for CTA button
        const ctaButton = document.querySelector('.work-cta-btn');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                ctaButton.style.transform = 'translateY(-3px) scale(1.02)';
                ctaButton.style.boxShadow = '0 10px 25px rgba(17, 17, 17, 0.2)';
                ctaButton.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            ctaButton.addEventListener('mouseleave', () => {
                ctaButton.style.transform = 'translateY(0) scale(1)';
                ctaButton.style.boxShadow = 'none';
            });
        }

        // Add hover animation for project tags
        const projectTags = document.querySelectorAll('.project-tags span');
        projectTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-2px)';
                tag.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0)';
            });
        });
    }

    // Initialize all animations
    function initAnimations() {
        // Observe all animatable elements
        const animateElements = document.querySelectorAll([
            '.animate-fade-up',
            '.animate-slide-left',
            '.animate-slide-right',
            '.animate-scale-up',
            '.animate-category',
            '.animate-project',
            '.animate-tag',
            '.animate-button',
            '.animate-number'
        ].join(', '));

        animateElements.forEach(element => {
            observer.observe(element);
        });

        // Add hover animations
        addHoverAnimations();
    }

    // Parallax effect for hero section
    function addParallaxEffect() {
        const heroSection = document.querySelector('.work-hero');
        const selectedWorkImg = document.querySelector('.selected-work-title');
        
        if (heroSection && selectedWorkImg) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                
                if (scrolled < heroSection.offsetHeight) {
                    selectedWorkImg.style.transform = `translateY(${rate}px)`;
                }
            });
        }
    }

    // Smooth scroll behavior for better animation experience
    function addSmoothScroll() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Initialize everything
    initAnimations();
    addParallaxEffect();
    addSmoothScroll();

    // Performance optimization: pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        const animatedElements = document.querySelectorAll('[style*="transition"]');
        animatedElements.forEach(element => {
            if (document.hidden) {
                element.style.animationPlayState = 'paused';
            } else {
                element.style.animationPlayState = 'running';
            }
        });
    });

    console.log('Work page animations initialized');
});
