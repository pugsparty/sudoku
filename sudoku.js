const fs = require("fs");

export function read() {
  const task = [];
  const numbers = fs.readFileSync("puzzles.txt", "utf-8");
  const str = numbers.replaceAll("\n", "");
  const count = 81;
  for (let i = 0; i < str.length; i++) {
    if (i % count === 0 && i !== 0) {
      task.push(str.slice(i - count, i));
    }
  }
  return task.map((el) => [el]);
}

export function yaMolodec() {
  const arr = read();
  const lilArr = [];
  const count = 9;
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i][0].split("");
    for (let j = 0; j < newArr.length; j++) {
      if (j % count === 0 && j !== 0) {
        lilArr.push(newArr.slice(j - count, j));
      }
    }
  }
  return lilArr;
}
export function yaDebil() {
  const arr = yaMolodec();
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i][0]; j < arr[i][arr[i].length - 1].length; j++) {
      arr[i].map((el) => {
        if (el === "-") {
         return el = null;
        }
        if (el === Number(el)) {
          return el = Number(el);
        }
      });
    }
  }
}
console.log(yaDebil());
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
