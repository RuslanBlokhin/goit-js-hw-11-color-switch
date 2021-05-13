import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const botStart = document.querySelector('[data-action="start"]');
const botStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let btnId = null;

botStart.addEventListener('click', () => {
  botStart.disabled = true;
  if (btnId) return;
  btnId = setInterval(() => {
    const randomInd = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[randomInd];
  }, 1000);
});

botStop.addEventListener('click', () => {
  botStart.disabled = false;
  clearInterval(btnId);
  btnId = null;
});

// botStart.addEventListener('click', onStop);
