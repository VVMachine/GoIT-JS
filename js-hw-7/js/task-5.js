const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const baseName = nameOutputRef.textContent;

nameInputRef.addEventListener("input", nameChange);

function nameChange(e) {
  if (e.target.value.length === 0) {
    nameOutputRef.textContent = baseName;
  } else {
    nameOutputRef.textContent = e.target.value;
  }
}
