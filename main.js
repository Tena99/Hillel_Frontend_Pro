// Task 23. MakePairs.
// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].

const makePairs = function (object) {
  let tmp = [];

  for (let item in object) {
    tmp.push([item, object[item]]);
  }

  console.log(tmp);
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
