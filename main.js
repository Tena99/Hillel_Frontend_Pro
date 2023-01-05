// ДЗ 21. IsEmpty. Напишите функцию, которая делает поверхностную проверку объекта на пустоту.

const isEmpty = function (object) {
  for (key in object) {
    if (object[key] !== undefined) {
      return false;
    }
  }

  return true;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };

console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
