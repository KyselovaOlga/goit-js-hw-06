const bodyEl = document.body
bodyEl.addEventListener('click', onBtnClick)

function onBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
