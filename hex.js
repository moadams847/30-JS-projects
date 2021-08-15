const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex colors
// it has seven special characters
// which starts with a #

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// each click goes through six iterations
// it also calls the getRandomNumber fxn six times per click
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
