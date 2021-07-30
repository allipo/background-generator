let cssLine = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");

function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssLine.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);




