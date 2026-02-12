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


const themeBtn = document.querySelector("#theme-toggler");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

});

