import "./css/styles.css";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const bodyEl = document.querySelector("body");
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
let IntervalID;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setButtonAvailability = (button, bool) => {
  button.disabled = bool;
};

const setElementStyle = (element) => {
  element.setAttribute(
    "style",
    "background-color :" +
      colors[randomIntegerFromInterval(0, colors.length - 1)]
  );
};

startButton.addEventListener("click", () => {
  setButtonAvailability(startButton, true),
    (IntervalID = setInterval(setElementStyle, 1000, bodyEl));
});

stopButton.addEventListener("click", () => {
  setButtonAvailability(startButton, false);
  clearInterval(IntervalID);
});
