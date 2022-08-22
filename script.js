const columnsAll = document.querySelectorAll(".table__column");
// Выбор комьютера
const compChoose1 = getRandom(1, 20);
console.log(compChoose1);
const compChoose2 = getRandom(1, 20);
console.log(compChoose2);
const compChoose3 = getRandom(1, 20);
console.log(compChoose3);

// Счетчик для id ячеек
let i = 0;

// присваиваем каждой ячейке id
for (let column of columnsAll) {
  i++;
  column.id = i;
  column.addEventListener("click", userChoose);
}

// Функция для выбора пользователя
function userChoose() {
  this.classList.add("clickOn");
  this.removeEventListener("click", userChoose);
  return this.id;
}

// функция Random
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// пытаемся проверить совпадает ли выбор юзера и компьютера ???????????
console.log(userChoose() == compChoose1);
