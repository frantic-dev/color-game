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
const responseTime = document.getElementById("response-time");
const trueBtn = document.getElementById("true-btn");
const wrongBtn = document.getElementById("wrong-btn");
let randomColor = function () {
  let randomNumber = Math.floor(Math.random() * 10);
  return colors[randomNumber];
};
let startGame;
playBtn.addEventListener("click", () => {
  playBtn.disabled = true;
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
    playBtn.disabled = false;
    trueBtn.disabled = false;
    wrongBtn.disabled = false;
    startGame = Date.now();
  }, 3000);
});
function calculateResponseTime() {
  responseTime.textContent = Date.now() - startGame;
}
trueBtn.addEventListener("click", () => {
  calculateResponseTime();
  trueBtn.disabled = true;
  wrongBtn.disabled = true;
});
wrongBtn.addEventListener("click", () => {
  calculateResponseTime();
  trueBtn.disabled = true;
  wrongBtn.disabled = true;
});
console.log(Date.now());
