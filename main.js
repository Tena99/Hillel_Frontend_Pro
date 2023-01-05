// Task 15.  Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

//Option 1

function compact(array) {
  let result = "";

  array.filter(function _typeofFilter(item) {
    let tmp = typeof item;
    console.log(tmp, item);

    if (
      (tmp == "number" && item !== 0) ||
      (tmp == "string" && item.length > 0)
    ) {
      result += `${item}, `;
    }
  });

  return result;
}

const data = [0, 1, false, 2, undefined, "", 3, null, "a", "Hello"];
console.log(compact(data)); // [1, 2, 3]

// Option 2

// function Compact(data) {
//     return data.filter(function (item, index, array){
//         return Boolean(item);
//     });

//  }

//  alert(Compact([0, 1, false, 2, undefined, '', 3, null]));
