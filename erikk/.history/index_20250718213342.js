// im// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.to('.section-title', {
//         scrollTrigger: {
//             trigger: '.section-title',
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//         },
//         y: -100,
//         opacity: 1,
//         duration: 1,
//     });
// }) from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.to('.section-title', {
//         scrollTrigger: {
//             trigger: '.section-title',
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//         }
//         y: -100,
//         opacity: 1,
//         duration: 1,
        
//     });
// })


// Menu toggle functionality
const pagesLink = document.querySelector("#pages");
const menu = document.querySelector("#menu");

pagesLink.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const navLinkContainer = document.querySelector(".nav-link-container");

if (mobileMenuToggle && navLinkContainer) {
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        navLinkContainer.classList.toggle("active");
        
        // Prevent body scroll when menu is open
        if (navLinkContainer.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuToggle.classList.remove("active");
            navLinkContainer.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navLinkContainer.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) && 
            navLinkContainer.classList.contains("active")) {
            mobileMenuToggle.classList.remove("active");
            navLinkContainer.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

