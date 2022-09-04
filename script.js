const columnsAll = document.querySelectorAll(".table__item");
const span0 = document.querySelector("#_span0");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const span3 = document.querySelector("#_span3");
const resetBtn = document.querySelector("#resetBtn");
const timerText = document.querySelector("#_timerText");
const timer = document.querySelector("#_timer");
const rulesBtn = document.querySelector("#_rulesBtn");
const rulesBox = document.querySelector(".rules__contents");
const hideRulesBtn = document.querySelector("#_hideRulesBtn");

let rules = false;

// фунция показать/скрыть условия игры
rulesBtn.addEventListener("click", function () {
  if (rules == false) {
    rulesBox.classList.remove("rules__contents_off");
    rules = true;
  } else {
    rulesBox.classList.add("rules__contents_off");
    rules = false;
  }
});

// фунция скрыть условия игры
hideRulesBtn.addEventListener("click", function () {
  if (rules == true) {
    rulesBox.classList.add("rules__contents_off");
    rules = false;
  }
});

// Массив выборово юзера
let userChoices = [];

// Массив выборов комьютера
const compChoices = [];
console.log(compChoices);

// Счетчик для id ячеек
let counterIdColumn = 0;

// Счетчик для ходов юзера
let counterUserMoves = 0;

// Счетчик для правильных ответов юзера
let counterForRight = 0;

// Счетчик для неправильных ответов юзера
let counterForFals = 0;

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

function compChoose() {
  while (compChoices.length < 26) {
    let x = getRandom(1, 50);
    if (!compChoices.includes(x)) {
      compChoices.push(x);
    } else {
    }
  }
  console.log(compChoices);
}

compChoose();

// кнопка сброса - начать заново
resetBtn.addEventListener("click", function () {
  counterForFals = 0;
  counterForRight = 0;
  span0.textContent = "";
  span1.textContent = "";
  span2.textContent = "";
  span3.textContent = "";

  for (let column of columnsAll) {
    column.classList.remove("succes");
    column.classList.remove("fail");
    userChoices = [];
  }

  clearInterval(timerId);
  timerCounter = 100;
  timerText.textContent = timerCounter + " секунд";

  timer.addEventListener("click", startTimer);
});

let timerCounter = 100;
let timerId;
timerText.textContent = timerCounter + " секунд";

timer.addEventListener("click", startTimer);

//функция для запуска таймера
function startTimer() {
  timerId = setInterval(function () {
    timerCounter--;
    timerText.textContent = timerCounter + " секунд(ы)";
    if (timerCounter == 0) {
      clearInterval(timerId);
      timerCounter = 100;
    }
  }, 1000);
  timer.removeEventListener("click", startTimer);
}

// Функция для выборов ячеек пользователем
function userChoose() {
  if (counterUserMoves < 20) {
    userChoices.push(this.id);
    counterUserMoves++;
    span0.textContent = counterUserMoves;
    if (compChoices.includes(Number(this.id))) {
      this.classList.add("table__item_succes");
      counterForRight++;
      span1.textContent = counterForRight;
    } else {
      this.classList.add("table__item_fail");
      counterForFals++;
      span2.textContent = counterForFals;
    }
  }
  checkResult();
  this.removeEventListener("click", userChoose);
}

function checkResult() {
  if (Number(span1.textContent) >= 10) {
    span3.textContent = "поздравляем! Вы одержали победу";
    counterUserMoves = 20;
  }
  if (counterUserMoves == 20 && Number(span1.textContent < 10)) {
    span3.textContent = "поражение. Сыграйте еще раз";
  }
}
