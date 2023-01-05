// Task 14. Определить в каком регистре записан n-й символ строки.
// Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки в указанной позиции.
// Если в верхнем регистре выводится – true, если в нижнем – false.

function isUpperCase(str, pos) {
  tmp = str.substr(pos, 1);
  console.log(tmp);

  if (tmp == tmp.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isUpperCase("tasks JavaScript", 6)); // true
