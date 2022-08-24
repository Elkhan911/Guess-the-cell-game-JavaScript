const columnsAll = document.querySelectorAll(".table__column");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const span3 = document.querySelector("#_span3");
const resetBtn = document.querySelector("#resetBtn");
const timerText = document.querySelector("#_timerText");
const timer = document.querySelector("#_timer");

// Массив выборово юзера
let userChoices = [];

// Массив выборов комьютера
const compChoices = [];
console.log(compChoices);

// Счетчик для id ячеек
let counterIdColumn = 0;

// Счетчик для правильных ответов юзера
let counterForRight = 0;
span1.textContent = counterForRight;

// Счетчик для неправильных ответов юзера
let counterForFals = 0;
span2.textContent = counterForFals;

// присваиваем каждой ячейке id
for (let column of columnsAll) {
  counterIdColumn++;
  column.id = counterIdColumn;
  column.textContent = column.id;
  column.addEventListener("click", userChoose);
}

// функция Random
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Функция для массива выборов пользователя
function userChoose() {
  userChoices.push(this.id);
  // console.log(compChoices.includes(Number(this.id)));

  if (compChoices.includes(Number(this.id))) {
    this.classList.add("succes");
    counterForRight++;
    span1.textContent = counterForRight;
  } else {
    this.classList.add("fail");
    counterForFals++;
    span2.textContent = counterForFals;
  }

  // console.log(compChoices);
  // console.log(userChoices);
  this.removeEventListener("click", userChoose);
}

function compChoose() {
  for (let i = 1; i < 11; i++) {
    if (!compChoices.includes(getRandom(1, 100))) {
      compChoices.push(getRandom(1, 100));
    } else {
      compChoices.push(getRandom(1, 100));
    }
  }
  console.log(compChoices);
}

compChoose();

resetBtn.addEventListener("click", function () {
  counterForFals = 0;
  counterForRight = 0;
  span1.textContent = "";
  span2.textContent = "";

  for (let column of columnsAll) {
    column.classList.remove("succes");
    column.classList.remove("fail");
    userChoices = [];
  }

  clearInterval(timerId);
  timerCounter = 60;
  timerText.textContent = timerCounter + " секунд";

  timer.addEventListener("click", startTimer);
});

let timerCounter = 60;
let timerId;
timerText.textContent = timerCounter + " секунд";

timer.addEventListener("click", startTimer);

function startTimer() {
  timerId = setInterval(function () {
    timerCounter--;
    timerText.textContent = timerCounter + " секунд(ы)";
    if (timerCounter == 0) {
      clearInterval(timerId);
      timerCounter = 60;
    }
  }, 1000);
  timer.removeEventListener("click", startTimer);
}
