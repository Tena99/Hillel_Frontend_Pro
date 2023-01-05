// ДЗ 20. Without. Напишите функцию, которая возвращает новый объект без указанных значений.

const without = function (object, ...args) {
  let newObject = Object.assign({}, object);

  for (let i = 0; i <= args.length; i++) {
    let tmp = args[i];
    delete newObject[tmp];
  }

  return newObject;
};

const data = { a: 1, b: 2, c: 3 };
console.log(data);
console.log(without(data, "b", "c")); // { a: 1 }
