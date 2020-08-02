const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");

const inputRef = controlsRef.querySelector("input");

const buttonsRenderRef = controlsRef.querySelector(
  'button[data-action="render"]'
);
const buttonsDestroyRef = controlsRef.querySelector(
  'button[data-action="destroy"]'
);

let boxesCount = 0;

inputRef.addEventListener("change", (e) => {
  boxesCount = +e.target.value;
});

buttonsRenderRef.addEventListener("click", insertBoxes);
buttonsDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesArray = [];
  let divSize = 30;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.height = `${divSize}px`;
    newDiv.style.width = `${divSize}px`;
    newDiv.style.backgroundColor = getRGB();
    divSize += 10;

    boxesArray.push(newDiv);
  }

  return boxesArray;
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(255));
}

function getRGB() {
  return `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
}

function insertBoxes() {
  boxesRef.append(...createBoxes(boxesCount));
}

function destroyBoxes() {
  boxesRef.textContent = "";
}
