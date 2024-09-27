// function read(text) {
//     /**
//      * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
//      */

//   }

function solve(sudokuObj) {
  const getIdOfCell = sudokuObj.id;
  const getSquareOfCell = sudokuObj.sq;
  const getRowOfCell = sudokuObj.row;
  const getColOfCell = sudokuObj.column;
  const getValueOfCell = sudokuObj.value;

  const sudokuPrintArr = [];

  const objAllNums = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  for (let i = 0; i < sudokuObj.length; i++) {
    const square = sudokuObj[i];

    //let square1 = [9, 2, 3, null, 6, 1, null, 8, 7];

    const getArrUndOfSquare = (square) => {
      //получаем массив квадрата, ищем в нем неизвестные значения

      const objFromSquare = {};
      let counterUndef = 0;
      const objAllNumsSq = { ...objAllNums };
      console.log(objAllNumsSq);

      for (let j = 0; j < square.length; j++) {
        if (square[j] !== null) {
          objFromSquare[j + 1] = square[j];
          console.log(objFromSquare, square, square[j]);
        } else if (square[j] === null) {
          //objFromSquare[j + 1] = null;
          counterUndef++;
        }
      } //тут появился объект по квадрату

      for (let j = 0; j < square.length; j++) {
        if (!objFromSquare[j]) {
        }
      }

      //let result = getArrUndOfSquare(square1)
      //console.log(result);
    };
    //return "HELLO"
  }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

const sudokuNullArrTest = [
  [9, 2, 3, null, 6, 1, null, 8, 7],
  [9, 2, 3, 4, null, 6, 1, 8, 7],
];

console.log(solve(sudokuNullArrTest));

//   function isSolved() {
//     /**
//      * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//      * Возвращает булевое значение — решено это игровое поле или нет.
//      */
//   }

//   function prettyBoard() {
//     /**
//      * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//      * Выводит в консоль/терминал судоку.
//      * Подумай, как симпатичнее его вывести.
//      */
//   }}
