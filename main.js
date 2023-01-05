//Homework 16. Unique. Напишите функцию, которая убирает повторяющиеся значения.

const unique = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
