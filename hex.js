const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex colors have seven characters
// eg #f15025

// dom var----
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event listener
// every click goes through six iterations
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    // console.log(getRandomNumber());
    // console.log(hexColor);
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
