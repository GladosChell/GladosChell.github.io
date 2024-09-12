const submit = document.querySelector("button");
const input = document.querySelector("input");

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1; // Ensures random number between 1 and 100
}

let random_num;
document.addEventListener("DOMContentLoaded", function() {
  random_num = getRandomInt(100);
});

function checkInput() {
  const num = parseInt(input.value, 10); // Get input value and parse it as a number
  let paragraph = document.createElement("p");

  if (!isNaN(num)) {
    if (num === random_num) {
      paragraph.textContent = "Congratulations, it's correct!!";
    } else if (num < random_num) {
      paragraph.textContent = "It's larger :)";
    } else if (num > random_num) {
      paragraph.textContent = "It's smaller :)";
    }
  } else {
    paragraph.textContent = "Invalid input";
  }

  document.body.appendChild(paragraph); // Append result to the body
}

submit.addEventListener("click", checkInput);
