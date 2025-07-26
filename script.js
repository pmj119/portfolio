// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ⌨️ Typing Animation
const phrases = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Enthusiast"
];
let currentPhrase = 0, charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
  const current = phrases[currentPhrase];
  typedText.textContent = current.slice(0, charIndex++);
  if (charIndex > current.length) {
    setTimeout(() => {
      charIndex = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      type();
    }, 1200);
  } else {
    setTimeout(type, 100);
  }
}
type();

// ⬆️ Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 🍔 Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// ⏳ Hide Preloader When Page Loads
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  setTimeout(() => preloader.remove(), 500);
});
