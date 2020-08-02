const sizeScaleRef = document.querySelector("#font-size-control");
const textToScaleRef = document.querySelector("#text");

sizeScaleRef.addEventListener("input", fontSizeChange);

function fontSizeChange(e) {
  textToScaleRef.style.fontSize = `${e.target.value}px`;
}
