/* ==========================================================
   TYPEWRITER EFFECT
   ========================================================== */
const typewriterRoles = [
  "Full Stack Python Developer",
  "AI Enthusiast",
  "AWS Cloud Specialist",
  "Embedded Systems Builder"
];

let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const targetEl = document.getElementById("typed-text");

function typeWriter() {
  const currentText = typewriterRoles[roleIdx];
  
  if (isDeleting) {
    targetEl.textContent = currentText.substring(0, charIdx - 1);
    charIdx--;
  } else {
    targetEl.textContent = currentText.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 40 : 100;

  if (!isDeleting && charIdx === currentText.length) {
    speed = 2000; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % typewriterRoles.length;
    speed = 400; // Pause before new word
  }

  setTimeout(typeWriter, speed);
}

/* ==========================================================
   MOBILE MENU TOGGLE
   ========================================================== */
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ==========================================================
   ACTIVE NAVIGATION SCROLL SPY
   ========================================================== */
window.addEventListener("scroll", () => {
  let currentSection = "";
  const sections = document.querySelectorAll("section");
  
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (pageYOffset >= secTop) {
      currentSection = sec.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

/* ==========================================================
   STATIC CLIENT CONTACT FORM
   Dispatches through client default email agent
   ========================================================== */
function handleStaticForm(e) {
  e.preventDefault();
  const name = document.getElementById("sender-name").value;
  const email = document.getElementById("sender-email").value;
  const subject = document.getElementById("sender-subject").value;
  const msg = document.getElementById("sender-msg").value;

  const mailtoUrl = `mailto:sharonskumar111@gmail.com?subject=${encodeURIComponent(
    subject + " [Portfolio Inquiry from " + name + "]"
  )}&body=${encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + msg
  )}`;

  window.location.href = mailtoUrl;
}

// Initialize scripts
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
