const body = document.getElementById("body");
const button = document.getElementById("changeButton");

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
]

let index = 0;

button.addEventListener("click", function() {
    body.style.backgroundColor = colors[index];

    index++;
    if (index >= colors.length) index = 0;
});