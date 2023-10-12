var l = document.getElementById("l");
var f = document.getElementById("f");
var lm = document.getElementById("lm");
var fm = document.getElementById("fm");

var logo = document.getElementById("logosvg")
var desktop_navbar = document.getElementById("desktop-nav");
var mobile_navbar = document.getElementById("mobile-nav");
var kh6lf = document.getElementById("kh6lf");
var nav = document.getElementsByClassName("nav")[0];

// Logo SVG
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
if (window.screen.width <= 900) {
    lm.setAttribute("points", lpoints);
    fm.setAttribute("points", fpoints);
}
else {
    l.setAttribute("points", lpoints);
    f.setAttribute("points", fpoints);
}


// logo.addEventListener("mouseleave", (evt) => {
//     document.querySelectorAll("animateTransform").forEach((element) => {
//       element.beginElement();
//     });
//   });
