// Task 13. Ограничить длину строки.
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

function limitStr(str, n = 0, symb = null) {
  if (n !== 0 && symb == null) {
    str = str.substring(0, n);
    return `${str}...`;
  } else if (n !== 0 && symb !== null) {
    str = str.substring(0, n);
    return `${str}${symb}`;
  } else {
    return str;
  }
}

console.log(limitStr("Каждый охотник желает знать.")); // Каждый охотник желает знать.
console.log(limitStr("Каждый охотник желает знать.", 14)); // Каждый охотник...
console.log(limitStr("Каждый охотник желает знать.", 21, "!")); // Каждый охотник желает!
