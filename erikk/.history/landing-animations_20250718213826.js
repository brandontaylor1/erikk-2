// Landing page animations
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
        
        else if (element.classList.contains('animate-slide-up')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
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
        
        else if (element.classList.contains('animate-scale-in')) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            });
        }
        
        else if (element.classList.contains('animate-service-item')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        else if (element.classList.contains('animate-work-item')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(25px) scale(0.95)';
            element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            });
        }
        
        else if (element.classList.contains('animate-client-item')) {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            });
        }
        
        else if (element.classList.contains('animate-team-card')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px) scale(0.9)';
            element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    // Add enhanced hover animations
    function addHoverAnimations() {
        // Service items hover
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
                item.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                
                const hr = item.querySelector('hr');
                if (hr) {
                    hr.style.width = '100%';
                    hr.style.transition = 'width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                
                const hr = item.querySelector('hr');
                if (hr) {
                    hr.style.width = '';
                }
            });
        });

        // Selected work items hover
        const workItems = document.querySelectorAll('.selected-work-item');
        workItems.forEach(item => {
            const img = item.querySelector('img');
            
            item.addEventListener('mouseenter', () => {
                if (img) {
                    img.style.transform = 'scale(1.1)';
                    img.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }
                item.style.transform = 'translateY(-5px)';
                item.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', () => {
                if (img) {
                    img.style.transform = 'scale(1)';
                }
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = 'none';
            });
        });

        // Client items hover
        const clientItems = document.querySelectorAll('.clients-section-item');
        clientItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = 'rgba(17, 17, 17, 0.02)';
                item.style.transform = 'translateX(5px)';
                item.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
                item.style.transform = 'translateX(0)';
            });
        });



        // Link items hover with enhanced effect
        const linkItems = document.querySelectorAll('.link-item');
        linkItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = 'rgba(17, 17, 17, 0.03)';
                item.style.transform = 'translateX(10px)';
                item.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.borderRadius = '8px';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
                item.style.transform = 'translateX(0)';
                item.style.borderRadius = '0';
            });
        });

        // Arrow button animation
        const arrowButtons = document.querySelectorAll('.top-content-btn');
        arrowButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(5px)';
                    icon.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }
                btn.style.backgroundColor = 'var(--dark-color)';
                btn.style.color = 'var(--light-color)';
                btn.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            btn.addEventListener('mouseleave', () => {
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(0)';
                }
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
        });
    }

    // Parallax effect for hero background
    function addParallaxEffect() {
        const rightDivContainer = document.querySelector('.right-div-container');
        const tailoredLeftContainer = document.querySelector('.tailored-left-container');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            if (rightDivContainer && scrolled < window.innerHeight) {
                rightDivContainer.style.transform = `translateY(${rate}px)`;
            }
            
            if (tailoredLeftContainer && scrolled > 200 && scrolled < tailoredLeftContainer.offsetTop + tailoredLeftContainer.offsetHeight) {
                tailoredLeftContainer.style.transform = `translateY(${rate * 0.5}px)`;
            }
        });
    }

    // Typewriter effect for main heading
    function addTypewriterEffect() {
        const mainHeading = document.querySelector('.left-div-container-content h2');
        if (mainHeading) {
            const text = mainHeading.textContent;
            mainHeading.textContent = '';
            mainHeading.style.opacity = '1';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    mainHeading.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                } else {
                    // Trigger the rest of the animations after typewriter is done
                    setTimeout(() => {
                        initScrollAnimations();
                    }, 300);
                }
            };
            
            setTimeout(typeWriter, 500);
        } else {
            initScrollAnimations();
        }
    }

    // Initialize scroll-triggered animations
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll([
            '.animate-fade-up',
            '.animate-slide-up',
            '.animate-slide-left',
            '.animate-scale-in',
            '.animate-service-item',
            '.animate-work-item',
            '.animate-client-item',
            '.animate-team-card'
        ].join(', '));

        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Smooth scroll behavior
    function addSmoothScroll() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Initialize everything
    function init() {
        addHoverAnimations();
        addParallaxEffect();
        addSmoothScroll();
        addTypewriterEffect();
    }

    // Performance optimization
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }

    function updateAnimations() {
        ticking = false;
        // Any continuous animations can be updated here
    }

    window.addEventListener('scroll', requestTick);

    // Initialize when DOM is ready
    init();

    console.log('Landing page animations initialized');
});
