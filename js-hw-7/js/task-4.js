const counterRef = document.querySelector("#counter");

const counterValueRef = counterRef.querySelector("#value");

let counterValue = 0;

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

counterRef.addEventListener("click", (e) => {
  const action = e.target.getAttribute("data-action");

  if (action === "increment") {
    increment();
  } else if (action === "decrement") {
    decrement();
  }

  counterValueRef.textContent = counterValue;
});
