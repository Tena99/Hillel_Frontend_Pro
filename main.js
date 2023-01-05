// Task 11
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// 1. Делаем перебор
// 2. Делаем проверку по UpperCase. Символы будут равны как своему upper так и lower case, а буквы нет.
// 3. Делаем проверку на пробел

let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
let tmp;
let result = "";

function removeСhar(str) {
  for (i = 0; i < str.length; i++) {
    tmp = str.substring(i, i + 1);

    if (tmp !== tmp.toUpperCase() || tmp == " ") {
      result += tmp;
    }
  }

  return result;
}

console.log(removeСhar(str)); // "every hunter wishes to know"
