// Task 1.
// The user enters two values. One is assigned to one variable and the other to another.
// The values of the variables must be swapped so that the value of the first is in the second one and the value of the second is in the first one.

let userName = prompt("What's your name?");
let age = prompt("How old are you?");

let tmp = userName;
userName = age;
age = tmp;

alert(`Your name is ${age} and your age is ${userName} `);
