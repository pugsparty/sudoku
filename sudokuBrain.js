// function read(text) {
//     /**
//      * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
//      */

//   }

function solve(sudokuNullArr) {
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

  let coordinatesOfNullCeil = [];
  let undefNum1;
  let undefNum2;
  let undefNum3;
  let undefNum4;
  let undefNum5;
  let undefNum6;
  let undefNum7;
  let undefNum8;
  let undefNumsSumm;
  const objFromSquare = {};

  console.log(objAllNums);

  for (let i = 0; i < sudokuNullArr.length; i++) {
    const square = sudokuNullArr[i]; // квадрат
    console.log(square);

    let countUndefNumsInSq = 0;

    for (let f = 0; f < square.length; f++) {
      if (square[f] === null) countUndefNumsInSq++;
    } // считаем количество пустых ячеек в квадрате

    for (let j = 0; j < square.length; j++) {
      //const cell = square[j]; //клетка;

      if (countUndefNumsInSq === 1) {
        //ищем значение, если оно одно
        console.log(
          "количество неизвестных значений в квадрате под номером ",
          `${i} : `,
          `${countUndefNumsInSq}`
        );
        undefNum1 = 45 - square.reduce((acc, el) => acc + el, 0);
        console.log(
          "количество неизвестных значений 1, поэтому 45 - оно = ",
          `${undefNum1}`
        );
        coordinatesOfNullCeil[0] = i;
        coordinatesOfNullCeil[1] = j;
        console.log("его координаты ", `${coordinatesOfNullCeil}`);
        return undefNum1;
      } //ищем значение, если оно одно

      if (countUndefNumsInSq > 1) {
        //ищем значение, если оно НЕ одно
        console.log(
          "количество неизвестных значений в квадрате под номером ",
          `${i} : `,
          `${countUndefNumsInSq}`
        );
        undefNumsSumm = 45 - square.reduce((acc, el) => acc + el, 0);
        // console.log(
        //   "количество неизвестных значений ",
        //   `${countUndefNumsInSq}`,
        //   "поэтому сумма неизвестных чисел в квадрате = ",
        //   `${undefNumsSumm}`,
        //   ", значит ищем недостающие числа методом хэш-таблицы")

        if (square[j] !== null) {
          objFromSquare[j] = square[j];
        } else if (square[j] === null) {
          objFromSquare[j] = null;
          coordinatesOfNullCeil[0] = i;
          coordinatesOfNullCeil[1] = j;
          // console.log(
          //   "координаты первой пропущенной цифры по объекту",
          //   ` квадрата ${i}`,
          //   coordinatesOfNullCeil
          // );
          if (coordinatesOfNullCeil.length === 2) {
            //
            //console.log("undefNum1 = ", `${undefNum1}`);
          }
        } // собрала объект кажется, отсортировала его

        //return undefNumsSumm
      } // тут у нас уже есть сумма недостающих в квадрате и их количество
    }
  }

  console.log(objFromSquareSort);

  //const squareSort = square.sort((a, b) => a - b);
  //console.log(squareSort);

  //const objFromSquareSort = {};
  //let coordinateSquare = 9;
  //let coordinateCell = 9;

  //   for (let j = 0; j < square.length; j++) {
  //     const cell = square[j]; //клетка
  //     const objFromCeil = {};
  //     const cellSort = square[j].sort((a, b) => b - a); // собрала объект кажется, отсортировала его
  //     objFromSquare[j] = square[j];
  //   }

  return sudokuPrintArr;
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

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
//   }
