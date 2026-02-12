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

// Modal functionality
const modal = document.getElementById("contactModal");
const letsCreateBtns = document.querySelectorAll(".lets-create-btn");
const modalClose = document.querySelector(".modal-close");
const contactForm = document.getElementById("contactForm");

// Open modal when any "LET'S CREATE" button is clicked
letsCreateBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

// Close modal when close button is clicked
if (modalClose) {
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    });
}

// Close modal when clicking outside the modal content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// Handle form submission
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log form data (in a real app, this would send to a server)
        console.log("Form submitted:", data);
        
        // Show success message
        alert("Thank you for your message! We'll get back to you soon.");
        
        // Reset form and close modal
        contactForm.reset();
        modal.classList.remove("active");
        document.body.style.overflow = "";
    });
}
