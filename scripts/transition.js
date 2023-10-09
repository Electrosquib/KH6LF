var l = document.getElementById("l");
var logo = document.getElementById("logosvg")
var desktop_navbar = document.getElementById("desktop-nav");
var mobile_navbar = document.getElementById("mobile-nav");
var kh6lf = document.getElementById("kh6lf");
var nav = document.getElementsByClassName("nav")[0];

// Desktop Menu Transition
window.onscroll = function() {stick()};
console.log(desktop_navbar)
var sticky = desktop_navbar.offsetTop;
function stick() {
  if (window.scrollY >= sticky) {
    desktop_navbar.classList.add("sticky");
    kh6lf.classList.add("sticky");
    logo.classList.add("sticky");
    nav.classList.add("sticky")
    console.log(nav)
    logo.setAttribute("width", "100px");
    logo.setAttribute("height", "100px");

  } else {
    desktop_navbar.classList.remove("sticky");
    kh6lf.classList.remove("sticky")
    logo.classList.remove("sticky")
    nav.classList.add("sticky")
    logo.setAttribute("width", "200px")
    logo.setAttribute("height", "200px")

  }
}