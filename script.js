
"use strict";

// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.textContent = open ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// TEACHER BOOKING
const tutorSelect = document.getElementById("tutor");
const subjectSelect = document.getElementById("subject");

const tutorSubjects = {
  "Ayesha Zafar": ["Computer Science"],
  "Nimra Zafar": ["English", "Biology"],
  "Ahmad Zafar": ["Mathematics", "Physics"],
  "Warda Zafar": ["Chemistry"],
  "Fozia Zafar": [
    "Islamiat",
    "Pakistan Studies",
    "Translation of the Holy Quran"
  ]
};

function updateSubjects() {
  const tutor = tutorSelect.value;
  const subjects = tutorSubjects[tutor] || [];

  subjectSelect.innerHTML =
    '<option value="">Choose a subject</option>';

  subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  if (subjects.length === 1) {
    subjectSelect.value = subjects[0];
  }
}

tutorSelect.addEventListener("change", updateSubjects);

document.querySelectorAll("[data-tutor]").forEach(button => {
  button.addEventListener("click", () => {
    tutorSelect.value = button.dataset.tutor;
    updateSubjects();
  });
});

// CONTACT FORM
// Netlify processes this form after the site is
// published and form detection is enabled.
// No fake success message is shown locally.

// COPYRIGHT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// IMAGE FALLBACK
document.querySelectorAll(".teacher-photo img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";

    const placeholder = document.createElement("div");
    placeholder.textContent = "✦";
    placeholder.style.cssText = `
      display:grid;
      place-items:center;
      height:100%;
      font-size:80px;
      color:#493b94;
    `;

    img.parentElement.appendChild(placeholder);
  });
});
