const fontEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

textEl.style.fontSize = fontEl.value + "px";

function changeFontEl(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}

fontEl.addEventListener("input", changeFontEl);