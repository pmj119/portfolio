// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ✍️ Typing Effect
const typedText = document.getElementById("typed-text");
const phrases = ["Frontend Developer", "Creative Coder", "UI/UX Enthusiast", "React Learner"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = phrases[i];
  let displayed = current.substring(0, j);

  typedText.textContent = displayed;

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

// ⬆️ Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🍔 Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ⏳ Preloader Fadeout
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(() => preloader.remove(), 1000);
  }
});
