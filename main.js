// Task 22. Напишите функцию, которая поверхностно сравнивает два объекта.

const isEqual = function (firstObject, secondObject) {
  for (let item in firstObject) {
    let tmp = item + firstObject[item];
    let tmp2 = item + secondObject[item];

    console.log(`tmp1 - ${tmp}, tmp2 - ${tmp2}`);

    if (tmp !== tmp2) {
      return false;
    }
  }
  return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
