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
let color = document.getElementById("color");
const answer = document.querySelectorAll(".answer");
const result = document.getElementById("result");
let randomColor = function () {
  let randomNumber = Math.floor(Math.random() * 10);
  return colors[randomNumber];
};
let startGame;
playBtn.addEventListener("click", () => {
  playBtn.disabled = true;
  color.textContent = randomColor();
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
answer.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculateResponseTime();
    showResult(e.target);
    trueBtn.disabled = true;
    wrongBtn.disabled = true;
  })
);
function rightAnswer() {
  let bgColor = document.body.style.backgroundColor;
  if (bgColor === color.textContent) return "True";
  else return "Wrong";
}
function showResult(answerBtn) {
  if (answerBtn.textContent === rightAnswer()) result.textContent = "Congrats, You're right!" 
  else result.textContent = "Sadly...You're wrong."
}
