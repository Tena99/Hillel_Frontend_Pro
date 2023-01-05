// ДЗ 19. isPlainObject. Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

const isPlainObject = function (element) {
  if (
    typeof element === "object" &&
    element !== null &&
    !Array.isArray(element)
  ) {
    return true;
  } else {
    return false;
  }
};

const data = { a: 1 };
const data2 = [1, 2, 3];

console.log(isPlainObject(data)); // true
console.log(isPlainObject(data2)); // false
