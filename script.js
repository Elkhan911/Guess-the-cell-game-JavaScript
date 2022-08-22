const columnsAll = document.querySelectorAll(".table__column");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const resetBtn = document.querySelector("#resetBtn");

// Массив выборово юзера
const userChoices = [];
// Массив выборов комьютера
const compChoices = [];
console.log(compChoices);

// Счетчик для id ячеек
let counterIdColumn = 0;

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

// Функция для массива выборов пользователя
function userChoose() {
  userChoices.push(this.id);
  console.log(compChoices.includes(Number(this.id)));

  if (compChoices.includes(Number(this.id))) {
    this.classList.add("succes");
    counterForRight++;
    span1.textContent = counterForRight;
  } else {
    this.classList.add("fail");
    counterForFals++;
    span2.textContent = counterForFals;
  }

  console.log(compChoices);
  console.log(userChoices);
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
