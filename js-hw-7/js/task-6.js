const validatorInputRef = document.querySelector("#validation-input");

validatorInputRef.addEventListener("change", validator);

function validator(e) {
  if (+validatorInputRef.dataset.length === e.target.value.length) {
    validatorInputRef.classList.add("valid");
    validatorInputRef.classList.remove("invalid");
  } else {
    validatorInputRef.classList.remove("valid");
    validatorInputRef.classList.add("invalid");
  }
}
