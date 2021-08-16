// set initial
let count = 0;

const btn = document.querySelectorAll(".btn");
// console.log(btn);
const value = document.querySelector("#value");
// console.log(value);

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("decrease")) {
      count--;
      value.textContent = count;
      value.style.color = "red";
    } else if (e.currentTarget.classList.contains("reset")) {
      count = 0;
      value.textContent = count;
      value.style.color = "#222";
    } else if (e.currentTarget.classList.contains("increase")) {
      count++;
      value.textContent = count;
      value.style.color = "green";
    }
  });
});
