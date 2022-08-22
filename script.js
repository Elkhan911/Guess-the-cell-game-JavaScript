const columnsAll = document.querySelectorAll(".table__column");
// Массив выборово юзера
const userChoices = [];
// Массив выборов комьютера
const compChoices = [];
console.log(compChoices);

// Счетчик для id ячеек
let counter = 0;

// присваиваем каждой ячейке id
for (let column of columnsAll) {
  counter++;
  column.id = counter;
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
  } else {
    this.classList.add("fail");
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
