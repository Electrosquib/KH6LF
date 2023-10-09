var l = document.getElementById("l");
var logo = document.getElementById("logosvg")
var desktop_navbar = document.getElementById("desktop-nav");
var mobile_navbar = document.getElementById("mobile-nav");
var kh6lf = document.getElementById("kh6lf");
var logo = document.getElementById("logosvg");


var width = 13;
var lbottomwidth = 60;
var height = 60;
var lpoints = `
    ${width},0
    0,${height} 
    ${lbottomwidth},${height}
    ${(width/height)*width+lbottomwidth},${height-width}
    ${(width/height)*width+width},${height-width}
    ${2*width},0
    `;

var bottomwidth = 40;
var fpoints = `
    ${3*width+bottomwidth},0
    ${3*width},0
    ${2*width},${height}
    ${3*width},${height}
    ${4*width-(width/height)*width},${width}
    ${3*width-(width/height)*width+bottomwidth},${width}
    `;
l.setAttribute("points", lpoints);
f.setAttribute("points", fpoints);


document.getElementById("logosvg").addEventListener("mouseleave", (evt) => {
    document.querySelectorAll("animateTransform").forEach((element) => {
      element.beginElement();
    });
  });

window.onscroll = function() {stick()};
console.log(desktop_navbar)
var sticky = desktop_navbar.offsetTop;
function stick() {
  if (window.scrollY >= sticky) {
    desktop_navbar.classList.add("sticky")
    kh6lf.classList.add("sticky")
    logo.classList.add("sticky")
  } else {
    desktop_navbar.classList.remove("sticky");
    kh6lf.classList.remove("sticky")
    logo.classList.remove("sticky")
  }
}