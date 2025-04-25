// script.js

document.addEventListener("DOMContentLoaded", function () { const menuSearch = document.getElementById("menuSearch"); const menuItems = document.querySelectorAll(".menu-card");

if (menuSearch) { menuSearch.addEventListener("input", function () { const query = menuSearch.value.toLowerCase(); menuItems.forEach((card) => { const itemName = card.querySelector(".menu-title").textContent.toLowerCase(); if (itemName.includes(query)) { card.style.display = "block"; } else { card.style.display = "none"; } }); }); }

// Scroll animation const navLinks = document.querySelectorAll(".nav-link"); navLinks.forEach((link) => { link.addEventListener("click", function (e) { if (this.hash !== "") { e.preventDefault(); const target = document.querySelector(this.hash); if (target) { target.scrollIntoView({ behavior: "smooth" }); } } }); });

// Form validation const contactForm = document.getElementById("contactForm"); if (contactForm) { contactForm.addEventListener("submit", function (e) { const name = document.getElementById("name").value.trim(); const email = document.getElementById("email").value.trim(); const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all the fields before submitting.");
  }
});

}

// Hover interaction menuItems.forEach((card) => { card.addEventListener("mouseover", () => { card.classList.add("shadow-lg"); }); card.addEventListener("mouseout", () => { card.classList.remove("shadow-lg"); }); });

// Modal popup for specials const specials = document.querySelectorAll(".special-item"); const modal = document.getElementById("specialModal"); const modalTitle = document.getElementById("modalTitle"); const modalBody = document.getElementById("modalBody"); const closeModal = document.querySelector(".close-modal");

if (specials && modal) { specials.forEach((item) => { item.addEventListener("click", () => { const title = item.getAttribute("data-title"); const description = item.getAttribute("data-description"); modalTitle.textContent = title; modalBody.textContent = description; modal.classList.add("show-modal"); }); });

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

}

// Back to top button const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => { if (window.scrollY > 300) { backToTop.style.display = "block"; } else { backToTop.style.display = "none"; } });

backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });

// Accordion interaction for FAQs const accordions = document.querySelectorAll(".accordion-button"); accordions.forEach((btn) => { btn.addEventListener("click", () => { btn.classList.toggle("active"); const content = btn.nextElementSibling; if (content.style.maxHeight) { content.style.maxHeight = null; } else { content.style.maxHeight = content.scrollHeight + "px"; } }); });

// Typewriter effect for headline const typewriter = document.getElementById("typewriter"); const messages = ["Authentic Chinese Taste", "Delight in Every Bite", "Spice Meets Tradition"]; let msgIndex = 0; let charIndex = 0;

function typeEffect() { if (typewriter) { if (charIndex < messages[msgIndex].length) { typewriter.textContent += messages[msgIndex].charAt(charIndex); charIndex++; setTimeout(typeEffect, 100); } else { setTimeout(() => { typewriter.textContent = ""; charIndex = 0; msgIndex = (msgIndex + 1) % messages.length; setTimeout(typeEffect, 500); }, 1500); } } } typeEffect(); });

