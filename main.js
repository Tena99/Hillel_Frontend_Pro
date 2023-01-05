// Task 25. call, apply, bind. Напишите все возможные варианты для подмены контекста чтобы вызов метода getFullName вывел нужный результат.

const quest = {
  firstName: "John",
  lastName: "Konor",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const admin = {
  firstName: "Bob",
  lastName: "Morley",
};

console.log(quest.getFullName()); // "Bob Morley"

console.log(quest.getFullName.bind(admin)());
console.log(quest.getFullName.call(admin));
console.log(quest.getFullName.apply(admin));
