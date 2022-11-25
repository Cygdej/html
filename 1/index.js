const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(() => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor(seconds / 60) % 60;
      const sec = seconds % 60;
      timerEl.innerHTML = `${hours}h:${minutes}m:${sec}s`;
      if (seconds == 0) {
        clearInterval(timer);
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();
let timer;

inputEl.addEventListener("input", () => {
  console.log(typeof inputEl.value);
  // let inputValue =inputEl.value
  if (/\D/.test(inputEl.value)) {
    inputEl.value = inputEl.value.replace(/\D/g, "");
  }
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener("click", () => {
  let seconds = Number(inputEl.value);

  clearInterval(timer);
  animateTimer(seconds);

  inputEl.value = "";
});
