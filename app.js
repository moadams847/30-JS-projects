const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementsByClassName("color");

btn.addEventListener("click", function () {
  console.log(getRandomNumber());

  document.body.style.backgroundColor = colors[getRandomNumber()];
  color.textContent = colors[getRandomNumber()];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
// console.log(getRandomNumber());
