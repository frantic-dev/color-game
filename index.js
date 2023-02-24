const colors = [
  "red",
  "blue",
  "yellow",
  "pink",
  "green",
  "purple",
  "orange",
  "black",
  "white",
  "brown",
];
const playBtn = document.getElementById("play-btn");
const timer = document.getElementById("timer");
let randomColor = function() {
  let randomNumber = Math.floor(Math.random()*10)
  return colors[randomNumber]
}
playBtn.addEventListener("click", () => {
  setTimeout(() => {
    document.body.style.backgroundColor = randomColor();
  }, 3000);
    timer.textContent = 3;
  setTimeout(() => {
    timer.textContent = 2;
  }, 1000);
  setTimeout(() => {
    timer.textContent = 1;
  }, 2000);
  setTimeout(() => {
    timer.textContent = 0;
  }, 3000);
});
console.log(randomColor());
