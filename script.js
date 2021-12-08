/* Navbar scrolled */
$(window).scroll(function() {
  if ($(window).width() > 800) {
    if ($(window).scrollTop() > 200) {
      $(".navbar").addClass("navbar-scrolled");
    }
    else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  }
});

/* Navbar links active state on scroll */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/* Easy on scroll event listener  */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let navbarlinks = select('#navbar .nav-link', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 60
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

// Open and close mobile nav
function openNav() {
  document.getElementById("mobile-nav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
}