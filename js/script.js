let randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
let buttons = document.querySelectorAll("button");

for (button of buttons) {
    button.addEventListener("click", colorize)
}


let h1s = document.querySelectorAll("h1");

for (h1 of h1s) {
    h1.addEventListener(e, colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
    body.style.backgroundColor = randomColor();
}