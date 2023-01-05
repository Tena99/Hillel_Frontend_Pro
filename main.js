// Task 24. getAccess. Реализовать метод так, чтобы для каждого объекта выводились корректные данные.

function getAccess() {
  if (this.access) {
    return `Access granted, welcome ${this.firstName} ${this.lastName}`;
  } else {
    return `Sorry, you don\'t have access, ${this.firstName} ${this.lastName}`;
  }
}

const guest = {
  firstName: "John",
  lastName: "Konor",
  access: false,
  getAccess: getAccess,
};

const admin = {
  firstName: "Bob",
  lastName: "Morley",
  access: true,
  getAccess: getAccess,
};

console.log(guest.getAccess()); // "Sorry, you don't have access, John Konor"
console.log(admin.getAccess()); // "Access granted, welcome Bob Morley"
