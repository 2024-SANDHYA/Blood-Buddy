const openBtn = document.getElementById("btn-open-nav");
const closeBtn = document.getElementById("btn-close-nav");
const nav = document.getElementById("nav");

openBtn.addEventListener("click", (e) => {
  nav.style.transition = "transform 250ms";
  nav.classList.add("nav-opened");
});

closeBtn.addEventListener("click", (e) => {
  nav.classList.remove("nav-opened");
  setTimeout(() => {
    nav.style.transition = "none";
  }, 250);
});
