"use strict";

// To add scroll effect on the navbar
const navLinks = document.querySelectorAll(".scroll");
const navLinksArr = [...navLinks];

navLinksArr.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});
