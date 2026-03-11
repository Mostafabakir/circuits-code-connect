// script.js - Portfolio site JS
// Author: Your Name
// Description: Handles simple interactivity and enhancements

// Example: Add smooth scroll for anchor links

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Add more JS as needed for animations or interactivity
