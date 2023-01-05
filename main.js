// Task 12. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

function compareString(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareString("string", "StRiNg")); // true
console.log(compareString("ABCDe", "AbcdW")); // false
