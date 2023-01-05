// Task 18. Палиндром
// Палиндромом называют слово или фразу, которая читается в обе стороны одинаково.
// В этом задании нужно написать функцию, которая проверяет, является ли исходная строка палиндромом.

function palindrome(str) {
  tmp = str.split(" ");

  let result = [];
  let result2 = [];

  for (let i = 0; i < tmp.length; i++) {
    result.push(tmp[i].toLowerCase());

    for (let j = 0; j < result[i].length; j++) {
      result2.push(result[i][j]);
    }
  }

  let result3 = result2.slice();
  result3.reverse();

  for (k = 0; k < result2.length; k++) {
    if (result2[k] == result3[k]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(palindrome("racecar")); // true
console.log(palindrome("table")); // false
console.log(palindrome("Анна")); // true
console.log(palindrome("А роза упала на лапу Азора")); // true
