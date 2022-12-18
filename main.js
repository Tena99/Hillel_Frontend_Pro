// Task 9
// A string of any content (letters, numbers, symbols) is entered.
// Find all numbers in the string. The result is a number. For example, if the given string is 23Gjf4uf21, the result is 23421

let firstString = prompt("Введите любое значение");
let result = "";
console.log(firstString);

for (let i = 0; i < firstString.length; i++) {
  let currentItem = firstString[i];
  console.log(currentItem);

  let tmp = parseInt(currentItem);

  if (!isNaN(tmp)) {
    result += currentItem;
    console.log("Result: " + result);
  }
}
