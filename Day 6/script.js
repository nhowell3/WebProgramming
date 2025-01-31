// Select Elements...

let paragraph = document.getElementById("text");
let button = document.getElementById("colorButton");
let addTextButton = document.getElementById("addTextButton");
let removeTextButton = document.getElementById("removeTextButton");
let extraTextContainer = document.getElementById("extra-texts");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

// Change text color on button click
button.addEventListener("click", function() {
    paragraph.style.color = getRandomColor();
});

// Mouse over event...
button.addEventListener("mouseover", function() {
    paragraph.style.backgroundColor = "lightgray";
});

// Double
button.addEventListener("dblclick", function() {
    paragraph.style.backgroundColor = "transparent";
});

// Add a new paragraph

addTextButton.addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically added paragraph";
    newParagraph.style.color = getRandomColor();
    extraTextContainer.appendChild(newParagraph);
});

// Remove the last added paragraph...
removeTextButton.addEventListener("click", function() {
    let lastParagraph = extraTextContainer.lastElementChild;
    if (lastParagraph) {
        extraTextContainer.removeChild(lastParagraph);
    }
});