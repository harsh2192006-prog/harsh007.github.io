// =========================
// TYPING ANIMATION
// =========================

const words = [
    "Software Developer",
    "Web Developer",
    "Video Editor",
    "Creative Learner"
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let typingSpeed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currentWord.length) {

        typingSpeed = 1600;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;

        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

if (typingText) {
    typeEffect();
}


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("active");
    });

}


// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        menuBtn.textContent = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// =========================
// AUTOMATIC COPYRIGHT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}