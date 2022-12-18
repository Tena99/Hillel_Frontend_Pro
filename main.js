// Task 8
// Find the specified substring in the string and replace it with a new one.
// The user enters the string, its substring to replace it, and the new substring.
// Methods: indexOf, substring, substr

let firstString = prompt(`1. Пожалуйста, введите любой текст`);
console.log(firstString);
let secondString = prompt(
  `2. Пожалуйста, введите текст который вы хотите заменить`
);
console.log(secondString);
let thirdString = prompt(
  `3. Пожалуйста, введите текст на который вы хотите заменить указанный отрезок`
);
console.log(thirdString);

// Положение искомого элемента

let IndexPos = firstString.indexOf(secondString);

// Вырезать подстроку до искомого элемента

let startSubstr = firstString.substring(0, IndexPos);
console.log(startSubstr);

// Вырезать подстроку после искомого элемента

let endSubstr = firstString.substr(IndexPos + secondString.length);
console.log(endSubstr);

// Сложить полученный результат и вывести в консоль

let result = startSubstr + thirdString + endSubstr;
document.write(result);
